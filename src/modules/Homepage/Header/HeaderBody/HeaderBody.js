import React from 'react';
import './HeaderBody.css';
const HeaderBody = () => {
    return (
        <section className="header-body">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="font-50">Let’s Grow Your Brand To The Next Level</h2>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <figure><img src={require('../../../../resourses/images/logos/Frame.svg')} alt="" className="img-fluid home-img"/></figure>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HeaderBody;