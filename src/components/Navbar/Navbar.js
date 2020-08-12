import React, { Component } from 'react';
import Logo from '../../assets/img/logo_size.png';
import { getloginStatus, nameSlicer, loadUser } from '../utills';
import Data from "../../assets/data/data_user.json"

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      showProfile: true,
      name: '',
      login: false
    }
  }

  componentDidMount(){
    const status = getloginStatus("status");
    if(status === "Login") this.setState({login: true})
    else this.setState({login: false})
    Data.map(item => {
      const temp = Object.values(item.account)
      if(temp[0] === loadUser("username")){
        const initialName = nameSlicer(item.name);
        this.setState({name: initialName})
      }
    })

  }
  render() {
    console.log(window.innerWidth);
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-custom" id="navcol1">
        <div className="container">
          <a className="navbar-brand" href={"/fitsearch/"}>
            <img src={Logo} className="logo" alt="Logo"/>
          </a>

                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navcol-1">
                    <div className="profile d-flex d-lg-none">
                    {!this.state.login ? <a className="login-link" href="#/Login">Sign in</a>
                      :<a className="profile-thumbnail d-flex align-items-center" href="#/Dashboard">
                      <p style={{textDecoration: "none"}}>{this.state.name}</p>
                  </a>
                    }
                    </div>
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item" role="presentation"><a className="nav-item-custom" href={"/fitsearch/"}>Merchant</a></li>
                    </ul>
                </div>
                <div className="profile d-none d-sm-none d-md-none d-lg-flex">
                {!this.state.login ? <a className="login-link" href="#/Login">Sign in</a>
                  :<a className="profile-thumbnail d-flex align-items-center" href="#/Dashboard">
                      <p style={{textDecoration: "none"}}>{this.state.name}</p>
                  </a>
                }</div>
                
        </div>
      </nav>
    );
  }
}
