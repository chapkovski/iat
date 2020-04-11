import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit'
import { setAnswer, increaseCurrentQ } from "./actions";

const data = [{
  id: 1,
  q: { type: 'text', content: 'jopa', belongs: 'left' },
  left: [{ label: 'bad' }, { label: 'cold' }],
  right: [{ label: 'good' }, { label: 'hot' }]
}]

const answers = createReducer([], {
  [setAnswer]: (state, action) => {

    state.push(action.payload)
  }
})
const questions = createReducer(data, {})
const currentQuestion = createReducer(0, {
  [increaseCurrentQ]: (state, action) => { state +=1 }
})
export default combineReducers({
  answers,
  questions,
  currentQuestion
})