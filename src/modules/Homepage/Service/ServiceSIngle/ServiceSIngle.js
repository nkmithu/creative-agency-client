import React from 'react';
import './ServiceSIngle.css'
const ServiceSIngle = (props) => {
    const service = props.service;
    return (
        <div className="col-lg-4 col-sm-12">
            <div className="card service-card">
                <img src={service.img} alt="" className="service-img"/>
                <h5 className="font-20 mt-3">{service.name}</h5>
                <p className="des mt-3">{service.des}</p>
            </div>
        </div>
    );
};

export default ServiceSIngle;