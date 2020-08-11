import React, { Component } from 'react';

export default class Merchant extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }

  componentDidMount(){
  }
  render() {
    console.log(this.state.location.state);
    return (
      <div className="row" >
          <div className="col-lg-8 col-md-12">
            <div className="merchant-information">
              {this.props.location.state}
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="maps">
              TeST
            </div>
          </div>
      </div>
    );
  }
}
