import React, { Component } from 'react';

export default class Payment extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            cc:"",
            cvv:"",
            valid:""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
        const {note, totalPrice, count} = this.state;
        window.location.href = "/Payment/"
        event.preventDefault();
      }
  render() {
    return (
      <div className="mx-auto" style={{width:"340px"}}> 
        <h3>Pay With Credit Card</h3>
        <form onSubmit={this.handleSubmit}>
            <div className="stylish" style={{border: "1px solid #BF3535", marginBottom: "16px", borderRadius: "4px"}}>
                <input name="name" type="text"  placeholder="Name" value={this.state.name} onChange={this.handleChange} required/>
            </div>
            <div className="stylish" style={{border: "1px solid #BF3535", marginBottom: "16px", borderRadius: "4px"}}>
                <input name="cc" type="text"  placeholder="Credit Card Number" value={this.state.cc} onChange={this.handleChange} required/>
            </div>
            <div className="d-flex justify-content-between">
                <div className="stylish" style={{border: "1px solid #BF3535", width: "45%", marginBottom: "16px", borderRadius: "4px"}}>
                    <input maxLength={3} name="cvv" type="password"  placeholder="CVV" value={this.state.cvv} onChange={this.handleChange} required/>
                </div>
                <div className="stylish" style={{border: "1px solid #BF3535",width: "45%", marginBottom: "16px", borderRadius: "4px"}}>
                    <input maxLength={5} name="valid" type="text"  placeholder="VALID (MM/YY)" value={this.state.valid} onChange={this.handleChange} required/>
                </div>
            </div>

            <button className="btn button-login mx-auto" style={{width: "100%", marginLeft: '10%'}}  >BOOK NOW</button>

        </form>   

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
