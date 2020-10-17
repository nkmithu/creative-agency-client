import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';

import './FeedbackSingle.css'
const FeedbackSingle = (props) => {
    const review = props.review;
    const customerImg= props.customerImg;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(customerImg);
  
    return (
        <div className="col-lg-4 col-sm-12 mb-4">
            <div className="card review-card">
                <div className="d-flex align-items-center">
                    {
                        customerImg.map(image=><img src={image} alt="" className="review-img"/>)
                    }
                    
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