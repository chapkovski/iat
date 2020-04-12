import React from 'react'
const left = 'a';
const right = 's';
export const params = {left, right,  allowedLetters:[left, right]}

const ParamsContext = React.createContext()

export const ParamsProvider = ParamsContext.Provider
export const ParamsConsumer = ParamsContext.Consumer

export default ParamsContext