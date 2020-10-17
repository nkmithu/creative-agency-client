import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import Topbar from '../../SharedComponents/Topbar/Topbar';
import ClientServiceSingle from './ClientServiceSingle/ClientServiceSingle';

const ClientServiceList = () => {
    const [loggedInUser,
        setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch("https://mysterious-ravine-13058.herokuapp.com/orders?email="+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [loggedInUser.email])
    return (
        <main className="d-flex dasboard-wrapper">
        <Sidebar/>
        <section className="contentWithTopbar">
            <Topbar/>
            <div className="container mt-5 py-5">
                <div className="row">
                    {
                        orders.map(order=><ClientServiceSingle order={order} key={order._id}> </ClientServiceSingle>)
                    }
                </div>
            </div>
        </section>
    </main>
    );
};

export default ClientServiceList;