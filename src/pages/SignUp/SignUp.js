import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import Pattern from '../../assets/img/Register.png'
import Data from '../../assets/data/data_user.json'
import { saveUser, setloginStatus, saveData } from '../../components/utills';

export default class SignUp extends Component {


  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fullname:'',
      location:'',
      phone:'',
      date:'',
      id:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const {password, username, fullname,location, phone, date} = this.state;

    let dataPush = {
      "_id": `${Data.length}`,
      "index": Data.length,
      "name": fullname,
      "gender": "male",
      "email": username,
      "phone": phone,
      "address": location,
      "account": {"username": username, "password": password}
    }

    Data.push(dataPush);
    console.log(Data)
    saveData('../../assets/data/data_user.json', Data);
    event.preventDefault();
  }

  myFunction() {
    var x = document.getElementById("passwordField");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  render() {
    // let dataPush = {
    //   "_id": `${Data.length}`,
    //   "index": Data.length,
    //   "name": this.state.fullname,
    //   "gender": "male",
    //   "email": this.state.username,
    //   "phone": this.state.phone,
    //   "address": this.state.location,
    //   "account": {"username": this.state.username, "password": this.state.password}
    // }

    // Data.push(dataPush);
    // console.log(Data)
    // saveData('../../assets/data/data_user.json', Data);
    return (
      <div className="login">
          <img alt="background" className="background-login img-fluid" src={Pattern} />
          <div className="d-flex flex-row-reverse position-relative" >
            <div className="row">
              <div className="col-md-6 col-lg-6"></div>
              <div className="col-md-6 col-lg-6 d-flex justify-content-center flex-column">
                <div className="card card-custom" style={{height: "540px", marginTop: "28px"}} >
                  <h1 className="login-title" style={{marginTop:"10px"}} >Sign In</h1>
                  <div className="form-signup" >

                    <form onSubmit={this.handleSubmit}>
                      <div className="stylish" style={{border: "1px solid #BF3535", borderRadius: "4px"}}>
                        <input name="username" type="text"  placeholder="Email" value={this.state.username} onChange={this.handleChange} required/>
                      </div>

                      <div className="stylish" style={{border: "1px solid #BF3535", borderRadius: "4px"}}>
                        <input name="password" type="password"  placeholder="Password" id="passwordField" value={this.state.password} onChange={this.handleChange} required />
                        <span className="show-password" onClick={this.myFunction}>Show</span>
                      </div>
                      <div className="stylish" style={{border: "1px solid #BF3535", borderRadius: "4px"}}>
                        <input name="fullname" type="text"  placeholder="Nama Lengkap" value={this.state.fullname} onChange={this.handleChange} required/>
                      </div>

                      <div className="stylish" style={{border: "1px solid #BF3535", borderRadius: "4px"}}>
                        <input name="location" type="text"  placeholder="Alamat"  value={this.state.location} onChange={this.handleChange} required />
            
                      </div>
                      <div className="stylish" style={{border: "1px solid #BF3535", borderRadius: "4px"}}>
                        <input name="phone" type="number"  placeholder="Nomor Handphone" value={this.state.phone} onChange={this.handleChange} required/>
                      </div>

                      <div className="stylish" style={{border: "1px solid #BF3535", borderRadius: "4px"}}>
                        <input name="date" type="text"  placeholder="Tanggal Lahir (hh/mm/yyyy)" value={this.state.date} onChange={this.handleChange} required/>
                      </div>

                      <div className="d-flex flex-row">
                          <div className="radio">
                              <label>
                                  Male
                                  <input name="gender" type="radio" value="male" checked={true} />
                              </label>
                          </div>
                          <div className="radio">
                              <label>
                                  Female
                                  <input name="gender" type="radio" value="female" />
                              </label>
                          </div>
                      </div>
                      <div className="d-flex flex-row">
                        <input type="checkbox" /> 
                        <p className="agreement">By Clicking Register, you agree to our <span>terms and conditions.</span></p>
                      </div>
                      <button className="btn button-login" style={{background: "#B9006A"}} type="submit">Register</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
