import React from 'react';
import { Link } from 'react-router-dom';

const MerchantCards = props => {
    return (
        <Link location={props.location} style={{all: "unset", cursor: "pointer"}} to={{pathname: props.to, state: props.state}}>
            <div className="card card-Merchant">
                <img alt="" src={props.path} />
                <div className="info-wrapper" >
                    <div className="card-name">{props.title}</div>
                    <div className="card-place">{props.address}</div>
                </div>
            </div>
        </Link>
    );
};

export default MerchantCards;