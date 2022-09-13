import { useState, useEffect } from "react";
import TextForm from "./TextForm/TextForm";
import NumberForm from "./NumberForm/NumberForm";
import ThoughtsFormData from "../../libs/ThoughtsFormData";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ThoughtForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    situation: "",
    thought: "",
    thought_rating: 0,
    emotions: "",
    behaviours: "",
    evidence_for: "",
    evidence_against: "",
    balanced_thought: "",
    balanced_rating: 0,
  });
  const [input, setInput] = useState();
  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    if (formCompleted) {
      const postNewThought = async () => {
        const newThought = {
          headers: {
            "content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(formData),
        };
        let res = await fetch("/api/thoughts", newThought);
        let data = await res.json();
        return data;
      };
      postNewThought();
    }
  }, [formCompleted]);

  useEffect(() => {
    setInput(formData[ThoughtsFormData[formStep - 1].title]);
  }, [formData]);

  const nextStep = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };
  const previousStep = (e) => {
    e.preventDefault();
    setFormStep(formStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [ThoughtsFormData[formStep - 1].title]: input });
    setFormCompleted(true);
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleChange = () => {
    setFormData({ ...formData, [ThoughtsFormData[formStep - 1].title]: input });
  };

  return (
    <>
      {!formCompleted ? (
        <Container fluid="md">
          <Form onSubmit={handleSubmit}>
            <p>{`Step ${formStep} of ${ThoughtsFormData.length}`}</p>
            {ThoughtsFormData[formStep - 1].type === "text" ? (
              <TextForm
                questionText={ThoughtsFormData[formStep - 1].questionText}
                placeholderText={ThoughtsFormData[formStep - 1].placeholderText}
                onChange={onChange}
                input={input}
              />
            ) : (
              <NumberForm
                questionText={ThoughtsFormData[formStep - 1].questionText}
                placeholderText={ThoughtsFormData[formStep - 1].placeholderText}
                onChange={onChange}
                input={input}
              />
            )}

            <div aria-label="Button group for navigating new thought form">
              {/* Hide the previous button if rendering the first form step */}
              {formStep !== 1 && (
                <Button
                  className="me-1 shadow-none"
                  id="form-button-previous"
                  variant="light"
                  onClick={(e) => {
                    handleChange();
                    previousStep(e);
                  }}
                >
                  Previous
                </Button>
              )}
              {/* Hide the next button if rendering the last form step */}
              {ThoughtsFormData.length !== formStep ? (
                <Button
                  className="shadow-none"
                  id="form-button-next"
                  variant="outline-primary"
                  onClick={(e) => {
                    handleChange();
                    nextStep(e);
                  }}
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="success"
                  type="submit"
                  id="form-button-submit"
                  className="shadow-none"
                >
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </Container>
      ) : (
        <div>
          <p>Thought has been logged!</p>
          <p>
            Click <a href="/newThought">here</a> to log another thought, or
            click <a href="/diary">here</a> to view your diary
          </p>
        </div>
      )}
    </>
  );
};

export default ThoughtForm;
