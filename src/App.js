import React from 'react';
import Birds from './components/Birds';
import {Route, Routes} from 'react-router-dom'



function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Birds/> }/>
        </Routes>
      </main>
    </>
  );
}

export default App;
