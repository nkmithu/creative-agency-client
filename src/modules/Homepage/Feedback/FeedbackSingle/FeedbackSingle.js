import React from 'react';

import './FeedbackSingle.css'
const FeedbackSingle = (props) => {
    const review = props.review;
  
    return (
        <div className="col-lg-4 col-sm-12">
            <div className="card review-card">
                <div className="d-flex align-items-center">
                    <img src={review.img} alt="" className="review-img"/>
                   <div>
                       <h4 className="font-20">{review.name}</h4>
                       <h5 className="font-16">{review.companyName}</h5>
                   </div>
                </div>
                <div className="mt-4">
                    <p>{review.description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSingle;