import React, { useEffect, useState } from "react";
import { IOption, QuizQuestion } from "../../types/types";
import TextInput from "../forms/TextInput";

interface IOptions {
  options: IOption[];
  question: QuizQuestion;
  onQuestionChange: (question: QuizQuestion)=>void;
}

const Options: React.FC<IOptions> = ({ options, question, onQuestionChange }) => {
  const [updatedOptions, setUpdatedOptions] = useState<IOption[]>(options);

  const handleCheckboxChange = (index: number) => {
    question.correctOptionIndex = index;
    onQuestionChange(question)
  };

  const handleInputChange = (index: number, value: string) => {
    const newOptions = [...updatedOptions];
    newOptions[index].title = value;
    setUpdatedOptions(newOptions);
  };

  useEffect(() => setUpdatedOptions(options), [options])

  return (
    <ul>
      {updatedOptions.map((option, i) => (
        <li key={i}>
          {question.editMode ? (
            <>
              <input
                type="radio"
                name={`${question.id}_options`}
                checked={question.correctOptionIndex === i}
                onChange={() => handleCheckboxChange(i)}
              />
              <TextInput
                id={`${question.id}_option_${i + 1}`}
                name={`${question.id}_option_${i + 1}`}
                type="text"
                label={`option ${i + 1}`}
                value={option.title}
                onChange={(e) => handleInputChange(i, e.target.value)}
              />
            </>
          ) : (
            <span>{option.title} {question.correctOptionIndex === i && "✓"}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Options;
