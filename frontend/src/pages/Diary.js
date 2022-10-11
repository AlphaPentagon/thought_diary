import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThoughtCard from "../components/ThoughtCard/ThoughtCard.js";

const Diary = () => {
  const [thoughts, setThoughts] = useState(null);

  useEffect(() => {
    const getAllThoughts = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URI}`);
      const data = await res.json();
      setThoughts(data.payload);
    };
    getAllThoughts();
  }, []);

  const handleDelete = async (thoughtId, index) => {
    setThoughts([...thoughts.slice(0, index), ...thoughts.slice(index + 1)]);
    let res = await fetch(`${process.env.REACT_APP_API_URI}/${thoughtId}`, {
      header: {
        "content-type": "application/json",
      },
      method: "DELETE",
    });
    let data = await res.json();
    return data;
  };

  return (
    <>
      <Container className="d-grid">
        <h2 className="text-primary text-center mb-5">Your Thought Diary</h2>
        <Row xs="1" md="2" lg="3" className="justify-content-center">
          {thoughts ? (
            thoughts.length !== 0 ? (
              thoughts.map((thought, index) => {
                return (
                  <ThoughtCard
                    key={thought._id}
                    thought={thought}
                    index={index}
                    handleDelete={handleDelete}
                  />
                );
              })
            ) : (
              <p className="text-center">
                {" "}
                No thoughts to display. <a href="/newThought">Get started</a>
              </p>
            )
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Diary;
