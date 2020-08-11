import React from 'react';
import { Route, Switch, useLocation} from 'react-router-dom';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Data from '../../assets/data/merchant_list.json'

import Navbar from '../Navbar';
import { UserContext } from '../Context/UserContext';
import Merchant from '../../pages/Merchant/Merchant';


const Navigate = (props) => {
    let currentPath = useLocation();
    console.log(currentPath);
    console.log(process.env.PUBLIC_URL);
    return (
        <div>
            {currentPath.pathname === "/Login" || currentPath.pathname === "/Register" ? null : <Navbar />  }
            <UserContext.Provider value="HELLO">
                <Switch location={props.location}>            
                    <Route component={Home} exact path={"/"} />
                    <Route component={Login} path={"/Login"} />
                        {Data.map((item, key) => {
                            return <Route key={key} component={Merchant} path={item.path}/>
                        })
                        }
                </Switch>
            </UserContext.Provider>
        </div>
    );
};

export default Navigate;