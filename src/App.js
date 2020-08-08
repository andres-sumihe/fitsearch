import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navigate from './components/router';

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      
      <Navigate />
    </BrowserRouter>
  );
}

export default App;
