import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
        <div className="footer"> 
            <img src={require("../../assets/img/logo_size.png")}  alt="Logo" />
            <div className="footer-social">
                <img src={require("../../assets/img/Facebook.png")}  alt="Logo" />
                <img src={require("../../assets/img/Twitter.png")}  alt="Logo" />
                <img src={require("../../assets/img/Google.png")}  alt="Logo" />
                <img src={require("../../assets/img/Instagram.png")}  alt="Logo" />
            </div>

            <div className="footer-copyrights">
                © Fitsearch.com. All rights reserved. 9 Fruits Creative Team Project
            </div>
        </div>

    );
  }
}
