import React from 'react';
import { Route, Switch, useLocation} from 'react-router-dom';

import Home from '../../pages/Home';
import Login from '../../pages/Login';

import Navbar from '../Navbar';
const Navigate = () => {
    let currentPath = useLocation();
    console.log(currentPath);
    console.log(process.env.PUBLIC_URL);
    return (
            <div>
                {currentPath.pathname === "/Login" ? null : <Navbar />  }
                <Switch>            
                    <Route component={Home} exact path={"/"} />
                    <Route component={Login} path={"/Login"} />
                </Switch>
            </div>
    );
};

export default Navigate;