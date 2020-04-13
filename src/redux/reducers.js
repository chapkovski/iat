import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit'
import { addAnswer, setCurrentQuestion, increaseCurrentQ } from "./actions";

const answers = createReducer([], {
  [addAnswer]: (state, action) => {

    state.push(action.payload)
  }
})
const pointer = createReducer(0, {
  [increaseCurrentQ]: (state, action) => { state += 1 }
})
const currentQuestion = createReducer({}, {
  [setCurrentQuestion]: (state, action) => {
    return action.payload;
  }
})
export default combineReducers({
  answers,
  pointer,
  currentQuestion
})