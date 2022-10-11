/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import TextForm from "./TextForm/TextForm";
import NumberForm from "./NumberForm/NumberForm";
import DateForm from "./DateForm/DateForm";
import TimeForm from "./TimeForm/TimeForm";
import ThoughtsFormData from "../../libs/ThoughtsFormData";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";

const ThoughtForm = ({ currentThought }) => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
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

  const currentProgress = Math.round(
    (formStep / ThoughtsFormData.length) * 100
  );

  useEffect(() => {
    if (formCompleted) {
      if (currentThought) {
        const updateThought = async () => {
          const updatedThought = {
            headers: {
              "content-type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(formData),
          };
          let res = await fetch(
            `${process.env.REACT_APP_API_URI}/${currentThought._id}`,
            updatedThought
          );
          let data = await res.json();
          return data;
        };
        updateThought();
      } else {
        const postNewThought = async () => {
          const newThought = {
            headers: {
              "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(formData),
          };
          let res = await fetch(`${process.env.REACT_APP_API_URI}`, newThought);
          let data = await res.json();
          return data;
        };
        postNewThought();
      }
    }
  }, [formCompleted]);

  useEffect(() => {
    setInput(formData[ThoughtsFormData[formStep - 1].title]);
  }, [formData]);

  useEffect(() => {
    if (currentThought) {
      setFormData({
        date: currentThought.date,
        time: currentThought.time,
        situation: currentThought.situation,
        thought: currentThought.thought,
        thought_rating: currentThought.thought_rating,
        emotions: currentThought.emotions,
        behaviours: currentThought.behaviours,
        evidence_for: currentThought.evidence_for,
        evidence_against: currentThought.evidence_against,
        balanced_thought: currentThought.balanced_thought,
        balanced_rating: currentThought.balanced_rating,
      });
    }
  }, []);

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

  const handleFormType = (type) => {
    switch (type) {
      case "text":
        return (
          <TextForm
            questionText={ThoughtsFormData[formStep - 1].questionText}
            placeholderText={ThoughtsFormData[formStep - 1].placeholderText}
            onChange={onChange}
            input={input}
          />
        );
      case "number":
        return (
          <NumberForm
            questionText={ThoughtsFormData[formStep - 1].questionText}
            placeholderText={ThoughtsFormData[formStep - 1].placeholderText}
            onChange={onChange}
            input={input}
          />
        );
      case "date":
        return (
          <DateForm
            questionText={ThoughtsFormData[formStep - 1].questionText}
            placeholderText={ThoughtsFormData[formStep - 1].placeholderText}
            onChange={onChange}
            input={input}
          />
        );
      case "time":
        return (
          <TimeForm
            questionText={ThoughtsFormData[formStep - 1].questionText}
            placeholderText={ThoughtsFormData[formStep - 1].placeholderText}
            onChange={onChange}
            input={input}
          />
        );
      default:
        return <p>Incorrect form type</p>;
    }
  };

  return (
    <>
      {!formCompleted ? (
        <Container fluid="md" className="mt-4">
          <Form onSubmit={handleSubmit}>
            {handleFormType(ThoughtsFormData[formStep - 1].type)}
            <p className="text-start mb-1">{`Step ${formStep} of ${ThoughtsFormData.length}`}</p>
            <ProgressBar now={currentProgress} className="mb-5" />
            <div aria-label="Button group for navigating new thought form">
              {/* Hide the previous button if rendering the first form step */}
              {formStep !== 1 && (
                <Button
                  className="me-1 shadow-none"
                  id="form-button-previous"
                  variant="outline-secondary"
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
                  {currentThought ? "Update" : "Submit"}
                </Button>
              )}
            </div>
          </Form>
        </Container>
      ) : (
        <div>
          {currentThought ? (
            <p>Thought has been updated!</p>
          ) : (
            <p>Thought has been logged!</p>
          )}

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
