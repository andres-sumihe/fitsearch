import React from 'react';
import { Route, Switch, useLocation} from 'react-router-dom';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Data from '../../assets/data/merchant_list.json'

import Navbar from '../Navbar';
import { UserContext } from '../Context/UserContext';
import Merchant from '../../pages/Merchant/Merchant';
import Service from '../../pages/Services/Service';
import Footer from '../Footer/Footer';
import SignUp from '../../pages/SignUp/SignUp';
import Payment from '../../pages/Payment/Payment';
import Dashboard from '../../pages/Dashboard/Dashboard';


const Navigate = (props) => {
    let currentPath = useLocation();
    // console.log(currentPath);
    // console.log(process.env.PUBLIC_URL);
    return (
        <div>
            {currentPath.pathname === "/Login" || currentPath.pathname === "/Register" ? null : <Navbar />  }
            <UserContext.Provider value="HELLO">
                <Switch location={props.location}>            
                    <Route  exact path={"/"} render={(props)=>(
                        <Home {...props} location={props.location} />
                    )} />
                    <Route  path={"/Login"} render={(props)=> (
                        <Login {...props} location={props.location} />
                    )} />
                    <Route  path={"/Register"} render={(props)=> (
                        <SignUp {...props} location={props.location} />
                    )} />
                    <Route  path={"/Payment"} render={(props)=> (
                        <Payment {...props} location={props.location} />
                    )} />
                    <Route  path={"/Dashboard"} render={(props)=> (
                        <Dashboard {...props} location={props.location} />
                    )} />
                        {Data.map((item, key) => {
                            return <Route key={key} exact path={item.path} render={(props)=> {
                                return <Merchant {...props} location={props.location} />
                            }} />
                        })
                        }
                        {Data.map((item) => {
                            return item.services.map((itemPath, key) =>{
                                return <Route key={key}  exact path={item.path + itemPath.path} render={(props)=>(
                                    <Service {...props} location={props.location} />
                                )} />
                            })
                        })
                        }
                </Switch>
            </UserContext.Provider>
            {currentPath.pathname === "/Login" || currentPath.pathname === "/Register" || currentPath.pathname === "/Dashboard" ? null : <Footer />  }
        </div>
    );
};

export default Navigate;