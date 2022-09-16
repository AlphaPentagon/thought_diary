import { useContext } from "react";
import ThoughtForm from "../components/ThoughtForm/ThoughtForm";
import ThoughtContext from "../components/ThoughtContext";

const UpdateThought = () => {
  const [currentThought, setCurrentThought] = useContext(ThoughtContext);

  return (
    <div className="Update-Thought text-center">
      <h2 className="text-primary">Update thought</h2>
      <ThoughtForm currentThought={currentThought} />
    </div>
  );
};

export default UpdateThought;
