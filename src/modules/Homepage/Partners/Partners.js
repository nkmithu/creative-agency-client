import React from 'react';
import './Partners.css'
const Partners = () => {
    return (
        <section className="my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="partners-wrapper">
                            <figure><img src={require('../../../resourses/images/logos/slack.png')} alt=""/></figure>
                            <figure><img src={require('../../../resourses/images/logos/google.png')} alt=""/></figure>
                            <figure><img src={require('../../../resourses/images/logos/uber.png')} alt=""/></figure>
                            <figure><img src={require('../../../resourses/images/logos/netflix.png')} alt=""/></figure>
                            <figure><img src={require('../../../resourses/images/logos/airbnb.png')} alt=""/></figure>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Partners;