import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Data from '../../assets/data/merchant_list.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getServiceName, getMerchantName } from '../../components/utills';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Service extends Component {
  constructor(props){
    super(props); 
    this.state = {
        name: "",
        date: "",
        desc: "",
        price: "",
        src: "",
        namaMerchant:"",
        alamat: "",
        place:"",
        count: 2,
        totalPrice: 0,
        note:"",
      service: []

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._handleClick = this._handleClick.bind(this);
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
      const serviceName = getServiceName("service");
      Data.map((item) => {
        if(merchantName === item.Nama){
          item.services.map(ser=>{
            if(ser.name === serviceName){

              let str = ser.price; 
              let matches = str.match(/(\d+)/)
              let total = parseInt(matches[0]) * this.state.count;
              this.setState({
                name: ser.name,
                src: ser.serviceImage,
                date: ser.date,
                price: ser.price,
                alamat: item.maps,
                namaMerchant: item.Nama,
                place: item.Alamat,
                totalPrice: total
              });
            }
            return null;
          })
        }
        return null;
      })
    
      // console.log(this.state.name)
  }

  _handleClick() {
  
  }


  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleClickPlus = () => {
      this.setState(prevState => {
        return {count: prevState.count + 1}
      })
      let str = this.state.price; 
      let matches = str.match(/(\d+)/)
      let cnt   = this.state.count
      let total = parseInt(matches[0]) * (cnt+1)
      this.setState({totalPrice: total})
  }
  handleClickMines = () => {
      this.setState(prevState => {
        return {count: prevState.count - 1}
      })
      // console.log(this.state.count)
      let str = this.state.price; 
      let matches = str.match(/(\d+)/)
      let totalPrice   = this.state.totalPrice
      let total = totalPrice - parseInt(matches[0])
      this.setState({totalPrice: total})
  }
  handleSubmit(event) {
    // const {note, totalPrice, count} = this.state;
    window.location.href = "/Payment/"
    event.preventDefault();
  }
  render() {
    // console.log(this.props.location.state);
    // console.log(this.state.name);
    return (
      <div className="row" >
          <div className="col-lg-8 col-md-12">
            <div className="merchant-information mx-auto">
              <img alt="bacground" src={this.state.src} className="img-fluid"/>
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
                <div location={this.props.location} className="service-card d-flex flex-row"> 
                    <div style={{backgroundImage: `url(${this.state.src})`}} className="service-image" />
                    
                    <div className="d-flex flex-column service-information">
                        <div className="service-date">{this.state.date}</div>
                        <div className="service-name">{this.state.name}</div>
                        {/* <div className="service-desc d-none d-md-block">{this.state.desc}</div> */}
                        <div className="service-price" >{this.state.price}</div>
                    </div>
                </div>
     
            </div>
            <div style={{paddingLeft: "5%"}}>
              <button className="btn button-login mx-auto" style={{width: "95%", marginLeft: '10%'}} data-toggle="modal" data-target="#exampleModal">BOOK</button>

              <div className="modal fade " id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog custom-modal " role="document">
                  <div className="modal-content">
                    <div className="modal-body d-flex flex-row">
                      <div className="modal-image"style={{backgroundImage: `url(${this.state.src})`}}></div>
                      <div className="modal-information">
                        <h1 className="modal-info-title">
                          PLACE
                        </h1>
                        <p className="modal-info-content">
                        {this.state.namaMerchant}, {this.state.place}
                        </p>
                        <h1 className="modal-info-title">
                          SERVICE
                        </h1>
                        <p className="modal-info-content">
                          {this.state.name}
                        </p>
                        <h1 className="modal-info-title">
                          LOCATION
                        </h1>
                        <p className="modal-info-content">
                        {this.state.alamat}
                        </p>
                        <h1 className="modal-info-title">
                          TOTAL PRICE
                        </h1>
                        <p className="modal-info-content" style={{color: "#FF7437"}}>
                          Rp{this.state.totalPrice}.000 
                            <span style={{color: "black", float: "right"}}>
                              <img src={require("../../assets/img/PLUS.png")} className="plusminus" alt="Plus" onClick={this.handleClickPlus}/>
                            </span> 
                            <span style={{color: "black", float: "right"}}>{this.state.count}</span>
                            <span style={{color: "black", float: "right"}}>
                              <img src={require("../../assets/img/MINUS.png")} className="plusminus" alt="Minus" onClick={this.handleClickMines}/>
                            </span>
                        </p>

                        <form onSubmit={this.handleSubmit}>
                          <div className="stylish" style={{border: "1px solid #BF3535", borderRadius: "4px"}}>
                            <input name="note" type="text"  placeholder="Note (Optional)" value={this.state.note} onChange={this.handleChange} required/>
                          </div>

                          <button className="btn button-login mx-auto" 
                                style={{width: "95%", marginLeft: '10%'}} 
                                data-toggle="modal" 
                                onClick={()=> window.location.href = "#/Payment"}
                                data-dismiss="modal">
                                  BOOK NOW
                          </button>
                          
                        </form>  

                        </div>
                   
                
                    </div>
                  </div>
                </div>
              </div>
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
