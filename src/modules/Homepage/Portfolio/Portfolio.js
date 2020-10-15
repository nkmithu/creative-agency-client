import React from 'react';
import './Portfolio.css';
import Slider from "react-slick";
const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                dots: false,
                arrows: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true
              }
            }
        ]
    };

    return (
        <section className="portfolio-wrapper">
            <div className="container h-100">
            <div className="row">
                    <div className="col-sm-12">
                        <h4 className="font-34 text-center text-white pt-5">Here are some of 
                            <span className="green-text ml-1">
                            our works</span>
                        </h4>
                    </div>
                </div>
                <div className="row h-100 align-items-center">
                    <div className="col-sm-12">
                        <Slider {...settings}>
                            <figure>
                                <img
                                    src={require('../../../resourses/images/carousel-1.png')}
                                    className="slider-img"
                                    alt=""/>
                            </figure>
                            <figure>
                                <img
                                    src={require('../../../resourses/images/carousel-2.png')}
                                    className="slider-img"
                                    alt=""/>
                            </figure>
                            <figure>
                                <img
                                    src={require('../../../resourses/images/carousel-3.png')}
                                    className="slider-img"
                                    alt=""/>
                            </figure>
                            <figure>
                                <img
                                    src={require('../../../resourses/images/carousel-4.png')}
                                    className="slider-img"
                                    alt=""/>
                            </figure>
                            <figure>
                                <img
                                    src={require('../../../resourses/images/carousel-5.png')}
                                    className="slider-img"
                                    alt=""/>
                            </figure>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;