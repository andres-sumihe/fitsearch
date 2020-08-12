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
      name: '',
      alamat: '',
      phone: '',
      maps: '',
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
        this.setState({service: item.services});
      }
      return true;
    })
  }
  render() {
    return (
      <div className="row" >
          <div className="col-lg-8 col-md-12">
            <div className="merchant-information mx-auto">
              <img alt="bacground" src={"https://api-production-bucket.s3-ap-southeast-1.amazonaws.com/company-5836c0c5a41e9a0e46937aa1/IMG_1495.jpg"} className="img-fluid"/>
              <div className="informations">
                <div className="">
                  <h2>Taman Sari Royal Heritage Spa</h2>
                  <h6>Sawah Besar</h6>
                </div>
                <p>Taman Sari Royal Heritage Spa memiliki beberapa perawatan spa yang dapat anda pilih berdasarkan kebutuhan tubuh anda. Dengan bantuan terapis kami yang sudah berpengalaman tinggi dan profesional, perawatan spa di Taman Sari Royal Heritage Spa dapat menghilangkan stress dan penat pada tubuh anda. Beberapa perawatan yang ditawarkan di gerai kami adalah Phyto-Whitening Therapy, Stress Reduction, dan Ratus Javanese. Cabang Taman Sari Royal Heritage Spa yang bekerja sama dengan Fitnesia ada di KH. Wahid Hasyim (Tanah Abang) dan cabang Pasar Baru Jakarta Pusat.</p>
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
