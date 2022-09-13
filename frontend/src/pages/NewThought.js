import ThoughtForm from "../components/ThoughtForm/ThoughtForm";

const NewThought = () => {
  return (
    <div className="New-Thought text-center">
      <h2 className="text-primary">Log a new thought</h2>
      <ThoughtForm />
    </div>
  );
};

export default NewThought;
