import { useEffect, useState } from "react";
import { Quiz, QuizQuestion } from "../types/types";
import TextInput from "./forms/TextInput";
import Button from "./Button";

const CreateQuiz = ({ questions = 1, options = 1 }) => {
  const [quizQuestions, setQuizQuestions] = useState<Array<QuizQuestion>>([]);
  const [currentQuestionTitle, setCurrentQuestionTitle] = useState<string>("");
  const [currentOption, setCurrentOption] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>({
    title: "",
    options: [],
  });
  const [quiz, setQuiz] = useState<Quiz>({
    id: Math.random(),
    creator: "",
    title: "",
    time: 0,
    questions: quizQuestions,
    completed: false,
  });
  const [optionsCount, setOptionsCount] = useState(options);

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
      questions: [...quizQuestions],
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

  const handleQuestionTitleChange = (e: any) => {
    console.log(e.target.value);
    setCurrentQuestionTitle(e.target.value);
  };

  const handleTimerChange = (e: any) => {
    setQuiz({ ...quiz, time: e.target.value });
  };

  const handleOptionChange = (e: any) => {
    setCurrentOption(e.target.value);
  };

  const handleOptionClick = () => {
    setCurrentQuestion({
      title: currentQuestionTitle,
      options: [...currentQuestion.options, { option: currentOption || "" }],
    });
    console.log(currentQuestion);
    setOptionsCount((prevCount) => prevCount + 1);
  };

  const handleQuestionsClick = () => {
    setQuizQuestions((prevQuestions) => [...prevQuestions, currentQuestion]);
    setCurrentOption("");
  };

  const OptionsCount = ({
    count,
    questionId,
  }: {
    count: number;
    questionId: string;
  }) => {
    let result = [];
    for (let i = 0; i < count; i++) {
      result.push(
        <TextInput
          key={questionId + "_option_" + i}
          id={`${questionId}_option_${i}`}
          name={`${questionId}_option_${i}`}
          type="text"
          label={`option ${i + 1}`}
          onChange={handleOptionChange}
        />
      );
    }
    return <>{result}</>;
  };

  const AddQuestion = () => {
    const id = Math.random().toString();
    return (
      <>
        <TextInput
          id={id}
          component="textarea"
          label="Text"
          name="question"
          value={currentQuestionTitle}
          onChange={handleQuestionTitleChange}
        />
        <OptionsCount count={optionsCount} questionId={id} />
        <div style={{ width: "50%" }}>
          <Button variant="primary" onClick={handleOptionClick}>
            New Option
          </Button>
        </div>
        <Button variant="primary" onClick={handleQuestionsClick}>
          Add Question
        </Button>
      </>
    );
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
      <AddQuestion />
      <Button variant="primary">Start</Button>
    </form>
  );
};

export default CreateQuiz;
