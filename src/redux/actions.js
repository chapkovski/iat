import {  createAction } from '@reduxjs/toolkit'
export const addAnswer = createAction('ADD_ANSWER');
export const increaseCurrentQ = createAction('INCREASE_CURRENT_Q');
export const setCurrentQuestion = createAction('SET_CURRENT_QUESTION');
