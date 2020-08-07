import React, { Component } from 'react';
import Logo from '../../assets/img/logo_size.png';

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      showProfile: true,
    }
  }

  componentDidMount(){
  }
  render() {
    console.log(window.innerWidth);
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-custom" id="navcol1">
        <div className="container">
          <a className="navbar-brand" href="/home">
            <img src={Logo} className="logo" alt="Logo"/>
          </a>

                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navcol-1">
                    <div className="profile d-flex d-lg-none">
                      <div className="profile-thumbnail">
                        <p>AS</p>
                      </div>
                    </div>
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item" role="presentation"><a className="nav-item-custom" href="/home">Merchant</a></li>
                    </ul>
                </div>
                <div className="profile d-none d-sm-none d-md-none d-lg-flex">
                  <div className="profile-thumbnail d-flex align-items-center">
                      <p>AS</p>
                  </div>
                </div>
                
        </div>
      </nav>
    );
  }
}
