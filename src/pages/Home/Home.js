import React, { Component } from 'react';
import Calendar_image from '../../assets/img/calendar.png'
import Sport_image from '../../assets/img/BG.png'
import Logo from '../../assets/img/logo_size.png'

export default class Home extends Component {
  render() {
    return (
      <div className="col">
        <div className="row">
          <div className="header-section">
              <h1 className="title">FitSearch, Lets Fit Together</h1>
              <p className="subtitle">We provide the best service for you who search for a good place for excercise activity, like Gym, Swimming Pool, Spa. </p>
              <div className="button-wrapper">
                <button className="btn btn-custom-secondary" onClick={()=>window.location.href ="#/Login"}>Sign up</button>
                <button className="btn btn-custom-outline-secondary" onClick={()=>window.location.href = "#/Register"}>Sign up</button>
              </div>

              <div className="image-wrapper d-none d-sm-none d-md-block ">
                  <img className="calendar-image img-fluid" src={Calendar_image} alt="Calendar"/>
                  <img className="logo-image img-fluid" src={Logo} alt="Logo"/>
                  <img className="sport-image img-fluid" src={Sport_image} alt="Sports"/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
