import { useState } from "react";
import { Quiz } from "../../types/types";
import { useDispatch } from "react-redux";
import { addQuiz } from "../../redux/actions/quizActions";
import TextInput from "../forms/TextInput";
import Button from "../Button";
import AddQuestion from "./CreateQuestion";
import ErrorMessage from "../Error";
import t from "../../assets/translations.json";
import { validation } from "../../functions/validation";

interface ICreateQuiz {
  onClick?: any;
}

const text = t.createQuizStep;

const CreateQuiz: React.FC<ICreateQuiz> = ({ onClick }) => {
  const dispatch = useDispatch();
  const [quiz, setQuiz] = useState<Quiz>({
    id: Math.random(),
    creator: "",
    title: "",
    time: 10,
    questions: [],
    completed: false,
  });
  const [error, setError] = useState<string>();
  const [addQuestion, setAddQuestion] = useState<boolean>(false);

  const addQuestionHandler = () => {
    if (!validation(quiz.creator)) {
      setError(text.errors.noName);
    } else if (!validation(quiz.title)) {
      setError(text.errors.noQuizTitle);
    } else {
      setError(undefined)
      setAddQuestion(true);
    }
  };

  const addQuizHandler = () => {
    dispatch(addQuiz(quiz));
    if (onClick && quiz.questions.length > 0) {
      onClick();
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
    <>
      <h1>{text.titleQuiz}</h1>
      <TextInput
        id="yourName"
        name="creator"
        type="text"
        readOnly={addQuestion}
        label={text.fields.name}
        value={quiz.creator}
        onChange={handleNameChange}
      />
      <TextInput
        id="quizTitle"
        name="quizTitle"
        type="text"
        readOnly={addQuestion}
        label={text.fields.quizTitle}
        value={quiz.title}
        onChange={handleTitleChange}
      />
      <TextInput
        id="timer"
        name="timer"
        type="number"
        readOnly={addQuestion}
        min={10}
        max={120}
        label={text.fields.timer}
        value={quiz.time}
        onChange={handleTimerChange}
      />
      {error && <ErrorMessage text={error} />}
      {addQuestion && <h2>{text.titleQuestion}</h2>}
      {addQuestion ? (
        <AddQuestion quiz={quiz} onClick={setQuiz} />
      ) : (
        <Button variant="primary" onClick={addQuestionHandler}>
          {text.fields.addQuestionButton}
        </Button>
      )}
      {quiz.questions.length > 0 && (
        <Button variant="primary" onClick={addQuizHandler}>
          {text.startButton}
        </Button>
      )}
    </>
  );
};

export default CreateQuiz;
