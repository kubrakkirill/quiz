import React, { useEffect, useState } from "react";
import { IOption, QuizQuestion } from "../../types/types";
import TextInput from "../forms/TextInput";

interface IOptions {
  options: IOption[];
  question: QuizQuestion;
}

const Options: React.FC<IOptions> = ({ options, question }) => {
  const [updatedOptions, setUpdatedOptions] = useState<IOption[]>(options);

  const handleCheckboxChange = (index: number) => {
    const newOptions = [...updatedOptions];
    newOptions[index].variant = !newOptions[index].variant;
    setUpdatedOptions(newOptions);
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
                type="checkbox"
                checked={option.variant}
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
            <span>{option.title} {option.variant && "✓"}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Options;
