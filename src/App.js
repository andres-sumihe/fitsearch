import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import Navigate from './components/router';

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigate />
    </Router>
  );
}

export default App;
