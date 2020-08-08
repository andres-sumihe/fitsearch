import React, { Component } from 'react';
import Calendar_image from '../../assets/img/calendar.png'

export default class Home extends Component {
  render() {
    return (
      <div className="col">
        <div className="row">
          <div className="header-section">
              <h1 className="title">FitSearch, Lets Fit Together</h1>
              <p className="subtitle">We provide the best service for you who search for a good place for excercise activity, like Gym, Swimming Pool, Spa. </p>
              <div className="button-wrapper">
                <button className="btn btn-custom-secondary" onClick={()=>window.location.href ="/Login"}>Sign up</button>
                <button className="btn btn-custom-outline-secondary" onClick={()=>window.location.href ="/Register"}>Sign up</button>
              </div>

              <div className="d-none">
                  <img className="" src={Calendar_image} alt="Calendar"/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
