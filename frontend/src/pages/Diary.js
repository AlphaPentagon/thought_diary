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
  }, [thoughts]);

  return (
    <div className="Diary">
      <h2 className="text-primary text-center">Your Thoughts</h2>
      {thoughts ? (
        thoughts.map((thought) => {
          const date = thought.createdAt.split("").slice(0, 10).join("");
          const time = thought.createdAt.split("").slice(11, 16);
          return (
            <div className="text-center" key={thought._id}>
              <p>Date: {date}</p>
              <p>Time: {time}</p>
              <p>Situation: {thought.situation}</p>
              <p>Thought: {thought.thought}</p>
              <p>Belief: {thought.thought_rating}%</p>
              <p>Emotions: {thought.emotions}</p>
              <p>Behaviours: {thought.behaviours}</p>
              <p>Evidence for: {thought.evidence_for}</p>
              <p>Evidence against: {thought.evidence_against}</p>
              <p>Balanced thought: {thought.balanced_thought}</p>
              <p>Belief: {thought.balanced_rating}%</p>
            </div>
          );
        })
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default Diary;
