import React from 'react';
import Main from './components/main'
import './App.scss';
import Footer from './components/footer';
import { ParamsProvider } from './params'
import {useKeyDown} from './components/useKeyListener';
function App() {
  // const letter = useKeyDown();
  // console.log('LETTER:', letter)
  const user = { name: 'Tania', loggedIn: true }
  return (
    <ParamsProvider value={user}>
    <div className="App">
      <Main/>
      <Footer/>
    </div>
    </ParamsProvider>
  );
}

export default App;
