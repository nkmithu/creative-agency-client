import React from 'react';
import './ClientServiceSingle.css'
const ClientServiceSingle = (props) => {
    const order = props.order;
    console.log(order);
    return (
        <div className="col-lg-6 col-sm-12 mb-4">
            <div className="card service-single-card">
                <div className="d-flex justify-content-between">
                  <img
                    src={require('../../../../../resourses/images/icons/service1.png')}
                    alt=""
                    className="service-img"/>  
                    <button className="btn btn-primary">Pending</button>
                </div>
                
                <h5 className="font-20 mt-3">{order.serviceName}</h5>
                <p className="des mt-3">{order.description}</p>
            </div>
        </div>
    );
};

export default ClientServiceSingle;