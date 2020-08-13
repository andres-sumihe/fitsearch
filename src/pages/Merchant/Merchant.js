import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ServiceCard from '../../components/Cards/ServiceCard';
import Data from '../../assets/data/merchant_list.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getMerchantName } from '../../components/utills';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Merchant extends Component {
  constructor(props){
    super(props);
    this.state = {
      pathName: '',
      src:'',
      name: '',
      alamat: '',
      phone: '',
      maps: '',
      desc:'',
      place:'',
      service: [
         
      ]

    }
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  // AIzaSyCC_jirgaBt_aKBTClfWKECOUbBLCJgC90
  componentDidMount(){
    const merchantName = getMerchantName("merchant");
    Data.map((item) => {
      this.setState({pathName: this.props.location.pathname})
      if(merchantName === item.Nama){
        this.setState({service: item.services, src: item.Url, name: item.Nama, place:item.Alamat, desc: item.desc});
      }
      return true;
    })
  }
  render() {
    return (
      <div className="row" >
          <div className="col-lg-8 col-md-12">
            <div className="merchant-information mx-auto">
              <img alt="bacground" src={this.state.src} className="img-fluid"/>
              <div className="informations">
                <div className="">
                  <h2>{this.state.name}</h2>
                  <h6>{this.state.place}</h6>
                </div>
                <p>{this.state.desc}</p>
              </div>
              <br />
            </div>

            <div className="divider">
              Services
            </div>

            <div className="service-wrapper">
              {this.state.service.map((item, key) => {
                  return <ServiceCard 
                      initialPath={this.state.pathName}
                      path={item.path} 
                      onLink={true} 
                      key={key} 
                      date={item.date} 
                      src={item.serviceImage} 
                      price={item.price} 
                      name={item.name} 
                      desc={item.desc} />
              })}
            </div>
          </div>
          <div className="col-lg-4 col-md-12 d-flex align-items-start justify-content-start hensin">
            <div className="maps">
              <div className="maps-wrapper">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyCj5rZrnUF6_nglG7oMWYxQZovh0Dxorgc" }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
              <div className="maps-information">
                  <h4 className="address"> Jl. Lautze Raya No.12    10750  Sawah Besar  Jakarta Pusat,  Jakarta,  Indonesia </h4>

                  <a className="btn btn-custom-maps mx-auto" href={"http://maps.google.com/maps/dir//-6.1571545,106.833059"} target="_blank" rel="noopener noreferrer">
                  Go TO MAP
                  </a>
              </div>
            </div>
            
            <div className="fasility mx-auto" >
              <h1>Fasility</h1>
              <img src={require("../../assets/amenities/WIFI.png")} alt="WIFI" />
              <img src={require("../../assets/amenities/PARKING.png")} alt="PARKING" />
              <img src={require("../../assets/amenities/WATER_DISPENSER.png")} alt="WATER_DISPENSER" />
              <img src={require("../../assets/amenities/LOCKER.png")} alt="LOCKER" />
              <img src={require("../../assets/amenities/SHOWER.png")} alt="SHOWER" />
            </div>
            
            <div className="fasility mx-auto" >
              <h1>Contact</h1>
              <p><span><FontAwesomeIcon icon={faPhone} className="contact-phone"/> +6281234567890</span></p>
              <p><span><FontAwesomeIcon icon={faEnvelope} className=""/> admin@gmail.com</span></p>
              <br />
            </div> 
              <img alt="review" src={require("../../assets/img/Review.png")} className="review"/>
          </div>
      </div>
    );
  }
}
