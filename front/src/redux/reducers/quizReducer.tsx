import { DELETE_QUIZ } from "../actions/actionTypes";

const initialState = {
  quizes: [
    {
      id: 1,
      creator: "John Doe",
      title: "Basic JavaScript Quiz",
      time: 30,
      questions: [
        {
          title: "What is the result of 2 + 2?",
          options: [{ option: "3" }, { option: "4" }, { option: "5" }, { option: "6" }]
        },
        {
          title: "Which keyword is used to declare a variable in JavaScript?",
          options: [{ option: "var" }, { option: "let" }, { option: "const" }]
        }
      ],
      completed: false
    },
    {
      id: 2,
      creator: "Jane Smith",
      title: "React Quiz",
      time: 45,
      questions: [
        {
          title: "What does JSX stand for?",
          options: [
            { option: "JavaScript XML" },
            { option: "Java XML" },
            { option: "JavaScript Extension" }
          ]
        },
        {
          title: "What is React?",
          options: [
            { option: "A JavaScript library for building user interfaces" },
            { option: "A programming language" },
            { option: "A database management system" }
          ]
        }
      ],
      completed: false
    },
    {
      id: 3,
      creator: "Alice Johnson",
      title: "General Knowledge Quiz",
      time: 60,
      questions: [
        {
          title: "Which planet is known as the Red Planet?",
          options: [
            { option: "Mars" },
            { option: "Venus" },
            { option: "Jupiter" },
            { option: "Saturn" }
          ]
        },
        {
          title: "Who wrote the famous play 'Romeo and Juliet'?",
          options: [
            { option: "William Shakespeare" },
            { option: "Jane Austen" },
            { option: "Charles Dickens" },
            { option: "F. Scott Fitzgerald" }
          ]
        }
      ],
      completed: false
    }
  ]
  };
  
  const quizReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case DELETE_QUIZ:
      return {
        ...state,
        quizes: state.quizes.filter(quiz => quiz.id !== action.payload)
      };
      default:
        return state;
    }
  };
  
  export default quizReducer;
  