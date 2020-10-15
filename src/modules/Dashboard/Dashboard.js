import React from 'react';
import './Dasboard.css';
import Sidebar from './SharedComponents/Sidebar/Sidebar';
import Topbar from './SharedComponents/Topbar/Topbar';

const Dashboard = () => {
    return (
        <main className="d-flex dasboard-wrapper">
            <Sidebar/>
            <section className="contentWithTopbar">
            <Topbar/>
            </section>
        </main>
    );
};

export default Dashboard;