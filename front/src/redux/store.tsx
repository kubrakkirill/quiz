// src/redux/store.js

import { createStore, combineReducers } from 'redux';
import quizReducer from './reducers/quizReducer';

const rootReducer = combineReducers({
    quizReducer,
});

const store = createStore(rootReducer);

export default store;
