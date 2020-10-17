import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceSIngle.css'
const ServiceSIngle = (props) => {
    const service = props.service;
    return (
        <div className="col-lg-4 col-sm-12 mb-4">
            <Link to="/clientOrder" className="service-Single-wrapper">
             <div className="card service-card">
                <img src={`http://localhost:5000/${service.img}`} alt="" className="service-img"/>
                <h5 className="font-20 mt-3">{service.title}</h5>
                <p className="des mt-3">{service.description}</p>
            </div>
            </Link>
           
        </div>
    );
};

export default ServiceSIngle;