

import rootReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import persistState from 'redux-localstorage'


// enhancer for persisting store in local storage
// const enhancer = persistState()
 
const store = configureStore({
  reducer: rootReducer,
  // enhancers: [enhancer]
})
export default store