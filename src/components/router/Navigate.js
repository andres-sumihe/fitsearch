import React from 'react';
import { HashRouter, Route, Switch, useLocation} from 'react-router-dom';

import Home from '../../pages/Home';
import Login from '../../pages/Login';

import Navbar from '../Navbar';
const Navigate = () => {
    let currentPath = useLocation();
    console.log(currentPath);
    return (
        <HashRouter basename='/'>
            <div>
                {currentPath.pathname === "/Login" ? null : <Navbar />  }
                <Switch>            
                    <Route component={Home} exact path="/" />
                    <Route component={Login} path="/Login" />
                </Switch>
            </div>
        </HashRouter>
    );
};

export default Navigate;