const ThoughtsFormData = [
  {
    title: "date",
    step: 1,
    questionText: "On what date did you have this thought?",
    placeholderText: "Please select the date...",
    type: "date",
  },
  {
    title: "time",
    step: 2,
    questionText: "What time did this thought occur?",
    placeholderText: "Please select the time...",
    type: "time",
  },
  {
    title: "situation",
    step: 2,
    questionText: "What was the situation?",
    placeholderText: "Describe the situation here...",
    type: "text",
  },
  {
    title: "thought",
    step: 3,
    questionText: "What was the thought?",
    placeholderText: "Describe the thought here...",
    type: "text",
  },
  {
    title: "thought_rating",
    step: 4,
    questionText: "How would you rate your belief in the thought?",
    type: "number",
  },
  {
    title: "emotions",
    step: 5,
    questionText: "What was your strongest emotion?",
    placeholderText: "Type your strongest emotion here...",
    type: "text",
  },
  {
    title: "behaviours",
    step: 6,
    questionText: "What behaviours did this thought trigger?",
    placeholderText: "Type your behaviours here...",
    type: "text",
  },
  {
    title: "evidence_for",
    step: 7,
    questionText: "What evidence is there that your thought is true?",
    placeholderText: "Type your evidence for here...",
    type: "text",
  },
  {
    title: "evidence_against",
    step: 8,
    questionText: "What evidence is there that your thought is false?",
    placeholderText: "Type your evidence against here...",
    type: "text",
  },
  {
    title: "balanced_thought",
    step: 9,
    questionText:
      "Weighing the evidence for and against, what is a more balanced thought?",
    placeholderText: "Type your more balanced thought here...",
    type: "text",
  },
  {
    title: "balanced_rating",
    step: 10,
    questionText: "How would you rate your belief in the new balanced thought?",
    type: "number",
  },
];

export default ThoughtsFormData;
