import React from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import Topbar from '../../SharedComponents/Topbar/Topbar';
import ClientServiceSingle from './ClientServiceSingle/ClientServiceSingle';

const ClientServiceList = () => {
    return (
        <main className="d-flex dasboard-wrapper">
        <Sidebar/>
        <section className="contentWithTopbar">
            <Topbar/>
            <div className="container mt-5 py-5">
                <div className="row">
                    <ClientServiceSingle />
                    <ClientServiceSingle />
                </div>
            </div>
        </section>
    </main>
    );
};

export default ClientServiceList;