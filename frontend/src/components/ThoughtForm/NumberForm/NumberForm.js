const NumberForm = ({
  formStep,
  questionText,
  nextStep,
  previousStep,
  numOfSteps,
  handleChange,
  onChange,
  input,
}) => {
  return (
    <>
      <h3>{questionText}</h3>
      <p>{`${input}%`}</p>
      <div>
        <span>0%</span>
        <input type="range" onChange={onChange} value={input} />
        <span>100%</span>
      </div>
    </>
  );
};

export default NumberForm;
