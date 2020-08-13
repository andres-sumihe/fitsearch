import React, { Component } from 'react';
import Data from '../../assets/data/data_user.json'
import { loadUser, saveUser, setloginStatus } from '../../components/utills';
import Calendar from 'react-calendar';

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            serviceName: "Intimacy Care",
            serviceDate: "Jumat 10:00 - 13:00",
            totalPrice:"Rp75.000",
            url:"https://api-production-bucket.s3-ap-southeast-1.amazonaws.com/company-5836c0c5a41e9a0e46937aa1/intimacy.JPG",
            name: "",
            phone: "",
            mail: "",
            date:"14/09/2000",
        }

        this.handleLogout.bind(this);
    }


    componentDidMount(){
        Data.map(item => {
        const temp = Object.values(item.account)
        if(temp[0] === loadUser("username")){
            this.setState({name: item.name, phone: item.phone, mail: item.email})
        }
        return null;
        })
    }

    handleLogout = (user, pass) =>{
        saveUser(user, pass);
        setloginStatus("Logout");
        window.location.href= "/fitsearch/#/";
        window.location.reload();
    }
  render() {
    return (
        <div className="d-flex flex-row flex-wrap"> 
            <div className="section-1 col-lg-2 p-2 d-none d-lg-block">
                <p>{this.state.name}</p>
                <hr />
                <div className="d-flex flex-row justify-content-around" style={{paddingLeft:"15px"}}>
                    <img src={require("../../assets/img/Dashboard_icon.png")} alt="Dashboard" height="24px" />
                    <p className="dashboard-title">Dashboard</p>
                </div>
                <hr />
                <button className="btn button-login mx-auto" style={{width: "100%", marginLeft: '10%'}} onClick={this.handleLogout}>LOG OUT</button>
            </div>
            <div className="section-2 col-lg-3 col-md-6 col-sm-12 mx-auto">
                <div className="profile-info">
              
                <h4>Profile</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="stylish-dashboard">
                        <label>Name</label>
                        <input className="custom-placeholder" name="name" type="text"  placeholder={this.state.name} value={this.state.username} onChange={this.handleChange} required/>
                    </div>

                    <div className="stylish-dashboard">
                        <label>Phone Number</label>
                        <input className="custom-placeholder" name="phone" type="number"  placeholder={this.state.phone} id="passwordField" value={this.state.password} onChange={this.handleChange} required />
                        
                    </div>
                    <div className="d-flex flex-row mt-1">
                        <div className="radio">
                            <label>
                                Male
                                <input name="gender" type="radio" value="male" checked />
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                Female
                                <input name="gender" type="radio" value="female" />
                            </label>
                        </div>
                    </div>
                    <div className="stylish-dashboard">
                        <label>Date</label>
                        <input className="custom-placeholder" name="date" type="password"  placeholder={this.state.date} id="passwordField" value={this.state.password} onChange={this.handleChange} required />
                        
                    </div>
                    <button className="btn button-login" type="submit">Update</button>
                </form>
                </div>

                <div className="favorite-list">
                    <h4>Favorite</h4>
                    <div className="favorite-card">
                        Friendly Gym
                        <img src={require("../../assets/img/love.png")} alt="Love" />
                    </div>
                    <div className="favorite-card">
                        Falah Swimming Course
                        <img src={require("../../assets/img/love.png")} alt="Love" />
                    </div>
                    {/* <img src={require()} alt="pattern" width="90%"/> */}
                </div>
            </div>
            <div className="section-3 col-lg-3 col-md-6 col-sm-12 mx-auto">
                <div className="change-password">
                <div className="profile-info">
              
              <h4>Change Password</h4>
              <form onSubmit={this.handleSubmit}>
                  <div className="stylish-dashboard">
                      <label>Old Password</label>
                      <input className="custom-placeholder" name="username" type="password"  placeholder={"*******"} value={this.state.username} onChange={this.handleChange} required/>
                  </div>

                  <div className="stylish-dashboard">
                      <label>New Password</label>
                      <input className="custom-placeholder" name="phone" type="password"  placeholder={"******"} id="passwordField" value={this.state.password} onChange={this.handleChange} required />
                      
                  </div>
                  <button className="btn button-login" type="submit">Update</button>
              </form>
              </div>
                </div>
                {/* <div className="review-history"> */}
                <div className="favorite-list">
                    <h4>Review History</h4>
                    
                    {/* <img src={require()} alt="pattern" width="90%"/> */}
                {/* </div> */}
                </div>
            </div>
            <div className="section-4 col-lg-4 col-md-12 col-sm-12">
                <div className="calendar mx-auto">
                    <Calendar prev2Label={null} next2Label={null} locale="en-EN" className="" />
                </div>
                <div className="order-history mx-auto">
                        <h4>Order History</h4>
                        <div location={this.props.location} className="service-card-dashboard d-flex flex-row"> 
                        <div style={{backgroundImage: `url(${this.state.url})`}} className="service-image-dashboard" />
                        
                        <div className="d-flex flex-column service-information-dashboard" >
                            <div className="service-date">{this.state.serviceDate}</div>
                            <div className="service-name">{this.state.serviceName}</div>
                            {/* <div className="service-desc d-none d-md-block">{this.state.desc}</div> */}
                            <div className="service-price" >{this.state.totalPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn button-login mx-auto d-block d-lg-none" style={{width: "80%"}} onClick={this.handleLogout}>LOG OUT</button>
        </div>
    );
  }
}
