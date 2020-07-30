import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
const Navigate = () => {
    return (
        <div>
            <h1>ROOT DIRECTORY</h1>
            <div>
                <Link to="/" >Home</Link> { }
                <Link to="/Login" >Login</Link>
            </div>
            <Switch>
                <Route component={Home} exact path="/" />
                <Route component={Login} path="/Login" />
            </Switch>
        </div>
    );
};

export default Navigate;