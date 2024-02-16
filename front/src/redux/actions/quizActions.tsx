import { DELETE_QUIZ } from './actionTypes';

export const deleteQuiz = (id:number) => ({
  type: DELETE_QUIZ,
  payload: id
});