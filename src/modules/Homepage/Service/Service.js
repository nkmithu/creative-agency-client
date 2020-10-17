import React from 'react';
import './Service.css';
import service1 from '../../../resourses/images/icons/service1.png';
import service2 from '../../../resourses/images/icons/service2.png';
import service3 from '../../../resourses/images/icons/service3.png';
import ServiceSIngle from './ServiceSIngle/ServiceSIngle';
import { useEffect } from 'react';
import { useState } from 'react';
const Service = () => {

    const serviceData = [
        {
            name: 'Web & Mobile design',
            img: service1,
            des: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your produ' +
                    'ct.'

        }, {
            name: 'Graphic design',
            img: service2,
            des: 'Amazing flyers, social media posts and brand representations that would make you' +
                    'r brand stand out.'

        }, {
            name: 'Web development',
            img: service3,
            des: 'With well written codes, we build amazing apps for all platforms, mobile and web' +
                    ' apps in general.'

        }
    ]

    const [services, setServices] = useState([])
   
    useEffect( () => {
        fetch('https://mysterious-ravine-13058.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
        <section className="service-main my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="font-34 text-center">Provide awesome
                            <span className="green-text ml-1">
                                services</span>
                        </h4>
                    </div>
                </div>
                <div className="row mt-5">
                    {
                      services.map(service=> <ServiceSIngle service={service}></ServiceSIngle> )  
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;