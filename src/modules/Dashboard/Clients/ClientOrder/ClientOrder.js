import React from 'react';
import { useState } from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import Topbar from '../../SharedComponents/Topbar/Topbar';
import './ClientOrder.css'
const ClientOrder = () => {

    const [order, setOrder] = useState({});
    const handleOnblur =(e)=>{
        const newOrder = { ...order };
        newOrder[e.target.name] = e.target.value;
        setOrder(newOrder);
    }


const handleOnSubmit =(e)=>{
        const newOrder = {
            ...order
        };
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
    }

    return (
        <main className="d-flex dasboard-wrapper">
            <Sidebar/>
            <section className="contentWithTopbar">
                <Topbar/>
                <div className="container mt-5 py-5">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                        <form onSubmit={handleOnSubmit}>
                            <div className="form-group">
                                <input onBlur={handleOnblur} name="email" type="email" className="form-control" placeholder="Your email address"/>
                            </div>
                            <div className="form-group">
                                <input onBlur={handleOnblur} name="name" type="text" className="form-control" placeholder="Your/Company Name"/>
                            </div>
                            <div className="form-group">
                                <input onBlur={handleOnblur} name="serviceName" type="text" className="form-control" placeholder="Graphics Design"/>
                            </div>
                            <div className="form-group">
                               <textarea onBlur={handleOnblur} className="form-control" name="description" id="" cols="10" rows="5" placeholder="Project details"></textarea>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                  <div className="col-lg-6 col-sm-12">
                                  <input onBlur={handleOnblur} name="price" type="number" className="form-control" placeholder="Price"/>
                                  </div>
                              </div>
                            </div>
                            <div>
                                <button className="btn btn-secondary">Send</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ClientOrder;