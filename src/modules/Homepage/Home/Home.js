import React from 'react';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Partners from '../Partners/Partners';
import Portfolio from '../Portfolio/Portfolio';
import Service from '../Service/Service';
import './Home.css'
const Home = () => {
    return (
        <main className="home">
            <Header/>
            <Partners/>
            <Service/>
            <Portfolio/>
            <Feedback/>
            <Contact/>
        </main>
    );
};

export default Home;