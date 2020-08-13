import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import Navigate from './components/router';

function App(props) {
  return (
    <Router >
      <Navigate location={props.location}/>
    </Router>
  );
}

export default App;
