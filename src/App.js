import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navigate from './components/router';

function App() {
  return (
    <BrowserRouter>
      <Navigate />
    </BrowserRouter>
  );
}

export default App;
