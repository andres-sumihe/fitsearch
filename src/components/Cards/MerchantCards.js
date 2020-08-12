import React from 'react';
import { Link } from 'react-router-dom';
import { setMerchantName} from '../utills';

const MerchantCards = props => {

    
    const handleClick = (name) =>{
        setMerchantName(name);
    }
    return (
        <Link location={props.location} style={{all: "unset", cursor: "pointer"}} onClick={()=> handleClick(props.title)} to={{pathname: props.to, state: props.state}}>
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