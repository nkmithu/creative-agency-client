import React from 'react';
import './FeedbackSingle.css'
const FeedbackSingle = (props) => {
    const customer = props.customer;
    return (
        <div className="col-lg-4 col-sm-12">
            <div className="card review-card">
                <div className="d-flex align-items-center">
                    <img src={customer.img} alt="" className="customer-img"/>
                   <div>
                       <h4 className="font-20">{customer.name}</h4>
                       <h5 className="font-16">{customer.designation}</h5>
                   </div>
                </div>
                <div className="mt-4">
                    <p>{customer.description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSingle;