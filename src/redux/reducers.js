import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit'
import {  setAnswer} from "./actions";

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
const questions = createReducer(data,{})
export default combineReducers({
  answers,
  questions
})