import React, { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import Topbar from '../../SharedComponents/Topbar/Topbar';
import AdminSingleService from './AdminSingleService/AdminSingleService';

const AdminServiceList = () => {
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('https://mysterious-ravine-13058.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <main className="d-flex dasboard-wrapper">
            <Sidebar/>
            <section className="contentWithTopbar">
                <Topbar/>
                <div className="container mt-5 py-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card p-3">
                                <table className="table bg-white">
                                    <thead className="bg-offgreen">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email ID</th>
                                            <th scope="col">Service</th>
                                            <th scope="col">Project Details</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders.map(order=><AdminSingleService key={order._id} order={order}></AdminSingleService>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AdminServiceList;