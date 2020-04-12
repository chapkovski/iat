import React from 'react';
import Main from './components/main'
import './App.scss';
import Footer from './components/footer';
import { ParamsProvider } from './context'
import params from './params'

function App() {
  // const letter = useKeyDown();
  // console.log('LETTER:', letter)
  
  return (
    <ParamsProvider value={params}>
    <div className="App">
      <Main/>
      <Footer/>
    </div>
    </ParamsProvider>
  );
}

export default App;
