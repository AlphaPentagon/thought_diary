import { useEffect, useState } from "react";

const Diary = () => {
  const [thoughts, setThoughts] = useState(null);

  useEffect(() => {
    const getAllThoughts = async () => {
      const res = await fetch("/api/thoughts");
      const data = await res.json();
      setThoughts(data.payload);
    };
    getAllThoughts();
  }, []);

  const handleDelete = async (thoughtId, index) => {
    setThoughts([...thoughts.slice(0, index), ...thoughts.slice(index + 1)]);
    let res = await fetch(`/api/thoughts/${thoughtId}`, {
      header: {
        "content-type": "application/json",
      },
      method: "DELETE",
    });
    let data = await res.json();
    return data;
  };

  return (
    <div className="Diary text-center">
      <h2 className="text-primary">Your Thoughts</h2>

      {thoughts ? (
        thoughts.length !== 0 ? (
          thoughts.map((thought, index) => {
            const date = thought.createdAt.split("").slice(0, 10).join("");
            const time = thought.createdAt.split("").slice(11, 16);
            return (
              <div className="text-center" key={thought._id}>
                <p>Date: {date}</p>
                <p>Time: {time}</p>
                <p>Situation: {thought.situation}</p>
                <p>Thought: {thought.thought}</p>
                <p>Thought Belief: {thought.thought_rating}%</p>
                <p>Emotions: {thought.emotions}</p>
                <p>Behaviours: {thought.behaviours}</p>
                <p>Evidence for: {thought.evidence_for}</p>
                <p>Evidence against: {thought.evidence_against}</p>
                <p>Balanced thought: {thought.balanced_thought}</p>
                <p>Balanced Thought Belief: {thought.balanced_rating}%</p>
                <button
                  onClick={() => {
                    handleDelete(thought._id, index);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <p>
            {" "}
            No thoughts to display. <a href="/newThought">Get started</a>
          </p>
        )
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default Diary;
