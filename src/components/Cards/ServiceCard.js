import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setServiceName } from '../utills';

export default class ServiceCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            services: {
                name: "",
                date: "",
                desc: "",
                price: "",
                src: "",
                path: "",
                initialPath: ""
            }
        }
    }

    componentDidMount() {
        let temp = {
            name: this.props.name,
            date: this.props.date,
            desc: this.props.desc,
            price: this.props.price,
            src: this.props.src,
            path: this.props.path,
            initialPath: this.props.initialPath
        }
        this.setState({
            services: temp
        })
    }

    handleClick = (name) =>{
        setServiceName(name);
    }
  render() {
    return (
        this.props.onLink ? 
        <Link location={this.props.location} onClick={()=> this.handleClick(this.state.services.name)} to={{pathname: this.state.services.initialPath + this.state.services.path,
                    state: this.state.services
        }} style={{all: "unset"}}>
            <div className="service-card d-flex flex-row"> 
                <div style={{backgroundImage: `url(${this.state.services.src})`}} className="service-image" />
                
                <div className="d-flex flex-column service-information">
                    <div className="service-date">{this.state.services.date}</div>
                    <div className="service-name">{this.state.services.name}</div>
                    <div className="service-desc d-none d-md-block">{this.state.services.desc}</div>
                    <div className="service-price" >{this.state.services.price}</div>
                </div>
            </div>
        </Link>
        : 
        <div location={this.props.location} className="service-card d-flex flex-row"> 
            <div style={{backgroundImage: `url(${this.state.services.src})`}} className="service-image" />
            
            <div className="d-flex flex-column service-information">
                <div className="service-date">{this.state.services.date}</div>
                <div className="service-name">{this.state.services.name}</div>
                {/* <div className="service-desc d-none d-md-block">{this.state.services.desc}</div> */}
                <div className="service-price" >{this.state.services.price}</div>
            </div>
        </div>
    );
  }
}
