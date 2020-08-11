import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Pattern from '../../assets/img/Login.png'
import Data from '../../assets/data/data_user.json'

export default class Login extends Component {


  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
    const {password, username} = this.state;
    const id_accept = Data.map(item => {
        console.log(item.account.password)
      if(password !== item.account.password && username.toLowerCase() !== item.account.username){
        return "Data Not Found";
      } else {
        window.location.href = "/fitsearch/";
        this.setState({id: item._id});
        return "Data Found";
      }
    })

    if(!id_accept.includes("Data Found")) {
      alert('USERNAME OR PASSWORD IS WRONG');
      event.target.value.reset();
    } 
 
    console.log(id_accept);
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
    return (
      <div className="login">
          <img alt="background" className="background-login img-fluid" src={Pattern} />
          <div className="d-flex flex-row-reverse position-relative" >
            <div className="row">
              <div className="col-md-6 col-lg-6"></div>
              <div className="col-md-6 col-lg-6 d-flex justify-content-center flex-column">
                <div className="card card-custom" >
                  <h1 className="login-title" >Sign In {this.state.msg}</h1>
                  <div className="form-login" >

                    <form onSubmit={this.handleSubmit}>
                      <div className="stylish">
                        <input name="username" type="text"  placeholder="Email" value={this.state.username} onChange={this.handleChange} required/>
                      </div>

                      <div className="stylish">
                        <input name="password" type="password"  placeholder="Password" id="passwordField" value={this.state.password} onChange={this.handleChange} required />
                        <span className="show-password" onClick={this.myFunction}>Show</span>
                      </div>

                      <button className="btn button-login" type="submit">Sign In</button>
                   
                      <p className="Not-Have-Account">Not Have Account Yet ?</p>
                      <button className="btn button-signup" onClick={() => window.location.href = "#/Register"}>Sign In</button>

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
