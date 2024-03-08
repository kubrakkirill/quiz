import { useEffect, useState } from "react";
import { IOption, Quiz, QuizQuestion } from "../types/types";
import TextInput from "./forms/TextInput";
import Button from "./Button";

const CreateQuiz = ({ questions = 1, options = 1 }) => {
  const [quiz, setQuiz] = useState<Quiz>({
    id: Math.random(),
    creator: "",
    title: "",
    time: 0,
    questions: [],
    completed: false,
  });

  const formSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    setQuiz({
      id: Math.random(),
      creator: formValues?.yourName,
      title: formValues?.quizTitle,
      time: formValues?.timer,
      questions: quiz.questions,
      completed: false,
    });
    console.log(formValues);
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
        name="yourName"
        type="text"
        label="Your name"
        value={quiz?.creator}
        onChange={handleNameChange}
      />
      <TextInput
        id="quizTitle"
        name="quizTitle"
        type="text"
        label="Quiz title"
        value={quiz?.title}
        onChange={handleTitleChange}
      />
      <TextInput
        id="timer"
        name="timer"
        type="text"
        label="Time for answer (sec)"
        value={quiz?.time}
        onChange={handleTimerChange}
      />

      <h2>Questions</h2>
      <AddQuestion questions={quiz.questions} />
      <Button variant="primary">Start</Button>
    </form>
  );
};

export default CreateQuiz;

interface IOptions {
  options: IOption[]
  questionId: string;
}

const Options: React.FC<IOptions> = ({
  options,
  questionId
}) => {
  return <ul>
    {options.map((option, i) => {
      return <li key={i}> // need id too
        <TextInput
          id={`${questionId}_option_${i}`}
          name={`${questionId}_option_${i}`}
          type="text"
          label={`option ${i + 1}`}
          onChange={e => option.title = e.target.value}
        />
      </li>
    })}
  </ul>
};

interface IAddQuestion {
  questions: QuizQuestion[]
}

const AddQuestion: React.FC<IAddQuestion> = ({
  questions
}) => {
  const [draftQuestions, setDraftQuestions] = useState([...questions])
  const addNewQuestion = () => {
    const id = Math.random().toString();
    const newQuestion: QuizQuestion = { id, title: '', options: [{ title: '' }] }
    questions.push(newQuestion)
    setDraftQuestions([...draftQuestions, newQuestion])
  }

  return (
    <>
    {draftQuestions.map((question, i) => {
      const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        question.title = e.target.value
        setDraftQuestions([...draftQuestions])
      }
      const addNewOption = () => {
        question.options.push({ title: '' })
        setDraftQuestions([...draftQuestions])
      }
      return <div key={question.id}>
        <TextInput
          id={question.id}
          component="textarea"
          label="Text"
          name="question"
          value={question.title}
          onChange={onTitleChange}
        />
        <Options options={question.options} questionId={question.id} />
        <div style={{ width: "50%" }}>
          <Button variant="primary" onClick={addNewOption}>
            New Option
          </Button>
        </div>
      </div>
    })}
      <Button variant="primary" onClick={addNewQuestion}>
        Add Question
      </Button>
    </>
  );
};
