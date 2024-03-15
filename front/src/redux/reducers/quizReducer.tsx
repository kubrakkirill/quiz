import { Quiz } from "../../types/types";
import { DELETE_QUIZ, ADD_QUIZ } from "../actions/actionTypes";

const initialState = {
  quizes: [] as Quiz[]
  };
  
  const quizReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case DELETE_QUIZ:
      return {
        ...state,
        quizes: state.quizes.filter(quiz => quiz.id !== action.payload)
      };
      case ADD_QUIZ:
      return {
        ...state,
        quizes: [...state.quizes, { ...action.payload, id: action.payload.id}]
      };
      default:
        return state;
    }
  };
  
  export default quizReducer;
  