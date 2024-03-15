import { useState } from "react";
import { Quiz, QuizQuestion } from "../../types/types";
import TextInput from "../forms/TextInput";
import Options from "./CreateOptions";
import Button from "../Button";

interface IAddQuestion {
  quiz: Quiz
  onClick?: any
}
  
const AddQuestion: React.FC<IAddQuestion> = ({
  quiz,
  onClick
}) => {
  const [draftQuestions, setDraftQuestions] = useState([...quiz.questions])
  const addNewQuestion = () => {
    const id = Math.random().toString();
    const updatedQuestions = draftQuestions.map(question => ({ ...question, editMode: false }));

    const newQuestion: QuizQuestion = { id, title: '', options: [{ title: '' , variant: false}], editMode: true }
    setDraftQuestions([...updatedQuestions, newQuestion])
    if(onClick){
      onClick({...quiz, quistions: updatedQuestions})
    }
  }

  return (
    <>
    {draftQuestions.map((question, i) => {
      const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        question.title = e.target.value
        setDraftQuestions([...draftQuestions])
      }
      const addNewOption = () => {
        question.options = [...question.options, { title: '' , variant: false}]
        setDraftQuestions([...draftQuestions])
      }
      return <div key={question.id}>
        {question.editMode ? <><TextInput
          id={question.id}
          component="textarea"
          label="Question"
          name={quiz.id+"_"+question.title}
          value={question.title}
          onChange={onTitleChange}
        />
        <Options options={question.options} question={question} />
        <div style={{ width: "50%" }}>
          <Button variant="primary" onClick={addNewOption}>
            New Option
          </Button>
        </div></> : <>
        {question.title}
        <Options options={question.options} question={question} />
        </>}
      </div>
    })}
      <Button variant="primary" onClick={addNewQuestion}>
        Add Question
      </Button>
    </>
  );
};

export default AddQuestion