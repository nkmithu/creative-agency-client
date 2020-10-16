import React from 'react';
import './Feedback.css';
import customer1 from '../../../resourses/images/customer-1.png';
import customer2 from '../../../resourses/images/customer-2.png';
import customer3 from '../../../resourses/images/customer-3.png';
import FeedbackSingle from './FeedbackSingle/FeedbackSingle';
import { useEffect } from 'react';
import { useState } from 'react';

const Feedback = () => {
    const [reviews, setReviews] = useState([]);

        useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])


    const customerReviewData = [
        {
            name: 'Nash Patrik',
            designation: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum dui' +
                    's laoreet maecenas. Feugiat ',
            img: customer1
        }, {
            name: 'Miriam Barron',
            designation: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum dui' +
                    's laoreet maecenas. Feugiat ',
            img: customer2
        }, {
            name: 'Bria Malone',
            designation: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum dui' +
                    's laoreet maecenas. Feugiat ',
            img: customer3
        }
    ]
    return (
        <section className="feedback-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="font-34 text-center pt-5">Clients
                            <span className="green-text ml-1">Feedback</span>
                        </h4>
                    </div>
                </div>
                <div className="row mt-5">
            {
                reviews.map(review=> <FeedbackSingle review = {review}></FeedbackSingle>)
            }
                    
                </div>
            </div>
        </section>
    );
};

export default Feedback;