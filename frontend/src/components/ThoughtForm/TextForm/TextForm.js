const TextForm = ({ questionText, placeholderText, onChange, input }) => {
  return (
    <>
      <h3>{questionText}</h3>
      <textarea
        onChange={onChange}
        value={input}
        placeholder={placeholderText}
      />
    </>
  );
};

export default TextForm;
