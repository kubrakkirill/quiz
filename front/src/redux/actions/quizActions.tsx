import { Quiz } from '../../types/types';
import { DELETE_QUIZ } from './actionTypes';
import { ADD_QUIZ } from './actionTypes';


export const deleteQuiz = (id:number) => ({
  type: DELETE_QUIZ,
  payload: id
});

export const addQuiz = (quizData: Quiz) => ({
  type: ADD_QUIZ,
  payload: quizData
});