import { useState } from "react";
import { Quiz, QuizQuestion } from "../../types/types";
import TextInput from "../forms/TextInput";
import Options from "./CreateOptions";
import Button from "../Button";
import t from "../../assets/translations.json";
import { validation } from "../../functions/validation";
import ErrorMessage from "../Error";

interface IAddQuestion {
  quiz: Quiz;
  onClick?: any;
}

const text = t.createQuizStep;
const AddQuestion: React.FC<IAddQuestion> = ({ quiz, onClick }) => {
  const [draftQuestions, setDraftQuestions] = useState([...quiz.questions]);
  const [error, setError] = useState<string>();
  const addNewQuestion = () => {
    const id = Math.random().toString();
    const updatedQuestions = draftQuestions.map((question) => ({
      ...question,
      editMode: false,
    }));

    const newQuestion: QuizQuestion = {
      id,
      title: "",
      options: [{ title: "", variant: false }],
      editMode: true,
    };
    console.log()
    if (!!draftQuestions.find((o) => !validation(o.title))) {
      setError(text.errors.noQuestion);
    } 
     else if(draftQuestions.map(q=>q.options.find((o) => !validation(o.title))).length > 0 && draftQuestions.length > 0){
       setError(text.errors.noOption);
     } 
    else {
      setError(undefined);
      setDraftQuestions([...updatedQuestions, newQuestion]);
      if (onClick) {
        onClick({ ...quiz, questions: updatedQuestions });
      }
    }
  };

  return (
    <>
      {draftQuestions.map((question, i) => {
        const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          question.title = e.target.value;
          setDraftQuestions([...draftQuestions]);
        };
        const addNewOption = () => {
          if (!validation(question.title)) {
            setError(text.errors.noQuestion);
          } else if (!!question.options.find((o) => !validation(o.title))) {
            setError(text.errors.noOption);
          } else {
            setError(undefined);
            question.options = [
              ...question.options,
              { title: "", variant: false },
            ];
            setDraftQuestions([...draftQuestions]);
          }
        };
        return (
          <div key={question.id}>
            {question.editMode ? (
              <>
                <TextInput
                  id={question.id}
                  component="textarea"
                  label={`${text.fields.question} ${quiz.questions.length + 1}`}
                  name={quiz.id + "_" + question.title}
                  value={question.title}
                  onChange={onTitleChange}
                />
                <Options options={question.options} question={question} />
                <div style={{ width: "50%" }}>
                  <Button variant="primary" onClick={addNewOption}>
                    {text.fields.addOptionButton}
                  </Button>
                </div>
              </>
            ) : (
              <>
                {question.title}
                <Options options={question.options} question={question} />
              </>
            )}
          </div>
        );
      })}
      {error && <ErrorMessage text={error} />}
      <Button variant="primary" onClick={addNewQuestion}>
        {text.fields.addQuestionButton}
      </Button>
    </>
  );
};

export default AddQuestion;
