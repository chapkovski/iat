import React from 'react'

const ParamsContext = React.createContext()

export const ParamsProvider = ParamsContext.Provider
export const ParamsConsumer = ParamsContext.Consumer

export default ParamsContext