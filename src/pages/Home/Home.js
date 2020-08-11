import React, { Component } from 'react';
import Calendar_image from '../../assets/img/calendar.png'
import Sport_image from '../../assets/img/BG.png'
import Logo from '../../assets/img/logo_size.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import MerchantCards from '../../components/Cards/MerchantCards';
import Merchant_Data from '../../assets/data/merchant_list.json';


export default class Home extends Component {
constructor(props){
  super(props);
  this.state = {
    location : 'Location',
    category : 'All'
  }
}

  render() {
    return (
      <div className="col">
        <div className="row">
          <div className="header-section">
              <h1 className="title">FitSearch, Lets Fit Together</h1>
              <p className="subtitle">We provide the best service for you who search for a good place for excercise activity, like Gym, Swimming Pool, Spa. </p>
              <div className="button-wrapper">
                <button className="btn btn-custom-secondary" onClick={()=>window.location.href ="#/Login"}>Sign in</button>
                <button className="btn btn-custom-outline-secondary" onClick={()=>window.location.href = "#/Register"}>Sign up</button>
              </div>

              <div className="image-wrapper d-none d-sm-none d-md-block ">
                  <img className="calendar-image img-fluid" src={Calendar_image} alt="Calendar"/>
                  <img className="logo-image img-fluid" src={Logo} alt="Logo"/>
                  <img className="sport-image img-fluid" src={Sport_image} alt="Sports"/>
              </div>
          </div>

          <div className="search-section mx-auto">
            <div className="category">
              <div className="dropdown">
                <span className="text-style-roboto" type="button" id="CategoryDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.state.category}
                </span>
                <div className="dropdown-menu" aria-labelledby="CategoryDropdown">
                  <p className="dropdown-item" onClick={()=> this.setState({category: 'Gym'})}>Gym</p>
                  <p className="dropdown-item" onClick={()=> this.setState({category: 'Spa'})}>Spa</p>
                  <p className="dropdown-item" onClick={()=> this.setState({category: 'Futsal'})}>Futsal</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faBars} className="map-icon"/>
            </div>
            <div className="search-bar text-style-roboto">
              <form>
                <input name="search" placeholder="Search By Merchant, Actifity, or Location" />
                <FontAwesomeIcon icon={faSearch} className="search-icon"/>
              </form>
            </div>
            <div className="location">
                <div className="dropdown">
                    <span className="text-style-roboto" type="button" id="LocationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.state.location}
                    </span>
                    <div className="dropdown-menu" aria-labelledby="LocationDropdown">
                      <p className="dropdown-item" onClick={()=> this.setState({location: 'Jakarta'})}>Jakarta</p>
                      <p className="dropdown-item" onClick={()=> this.setState({location: 'Semarang'})}>Semarang</p>
                      <p className="dropdown-item" onClick={()=> this.setState({location: 'Salatiga'})}>Salatiga</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon"/>
            </div>
          </div>

          {/* Content */}
          <div className="d-flex flex-row flex-wrap justify-content-between merchant-wrapper mx-auto">
            {Merchant_Data.map((item, key) => {
              return(
                <MerchantCards key={key} location={this.props.location} path={item.Url} address={item.Alamat} title={item.Nama} to={item.path} state={item.Nama} />
              )
            })

            }

            
            
          </div>

          
          <br />
          <br />
        </div>
      </div>
    );
  }
}
