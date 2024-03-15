import { useState } from "react";
import { Quiz } from "../../types/types";
import { useDispatch } from "react-redux";
import { addQuiz } from "../../redux/actions/quizActions";
import TextInput from "../forms/TextInput";
import Button from "../Button";
import AddQuestion from "./CreateQuestion";
import AllQuizes from "../AllQuizes";

interface ICreateQuiz {
  onClick?: any
}

const CreateQuiz: React.FC<ICreateQuiz> = ({
  onClick
}) => {
  const dispatch = useDispatch();
  const [quiz, setQuiz] = useState<Quiz>({
    id: Math.random(),
    creator: "",
    title: "",
    time: 0,
    questions: [],
    completed: false,
  });

  const formSubmit = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const formValues: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    setQuiz({
      id: quiz.id,
      creator: formValues?.yourName,
      title: formValues?.quizTitle,
      time: formValues?.timer,
      questions: quiz.questions,
      completed: false,
    });
    console.log(formValues)
    dispatch(addQuiz(quiz));
    if(onClick && quiz.questions.length > 0){
      onClick()
    }
  };

  const handleNameChange = (e: any) => {
    setQuiz({ ...quiz, creator: e.target.value });
  };

  const handleTitleChange = (e: any) => {
    setQuiz({ ...quiz, title: e.target.value });
  };

  const handleTimerChange = (e: any) => {
    setQuiz({ ...quiz, time: e.target.value });
  };

  return (
    <form className="create-quiz-section" onSubmit={formSubmit}>
      <h1>Create new quiz</h1>
      <TextInput
        id="yourName"
        name="creator"
        type="text"
        label="Your name"
        value={quiz.creator}
        onChange={handleNameChange}
      />
      <TextInput
        id="quizTitle"
        name="quizTitle"
        type="text"
        label="Quiz title"
        value={quiz.title}
        onChange={handleTitleChange}
      />
      <TextInput
        id="timer"
        name="timer"
        type="text"
        label="Time for answer (sec)"
        value={quiz.time}
        onChange={handleTimerChange}
      />

      <h2>Questions</h2>
      <AddQuestion quiz={quiz} onClick={setQuiz}/>
      <Button type="submit" variant="primary">Start</Button>
    </form>
  );
};

export default CreateQuiz;