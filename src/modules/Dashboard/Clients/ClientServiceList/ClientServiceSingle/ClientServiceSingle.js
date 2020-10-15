import React from 'react';
import './ClientServiceSingle.css'
const ClientServiceSingle = () => {
    return (
        <div className="col-lg-6">
            <div className="card service-single-card">
                <div className="d-flex justify-content-between">
                  <img
                    src={require('../../../../../resourses/images/icons/service1.png')}
                    alt=""
                    className="service-img"/>  
                    <button className="btn btn-primary">Pending</button>
                </div>
                
                <h5 className="font-20 mt-3">Web & Mobile design</h5>
                <p className="des mt-3">We craft stunning and amazing web UI, using a well
                    drrafted UX to fit your product.</p>
            </div>
        </div>
    );
};

export default ClientServiceSingle;