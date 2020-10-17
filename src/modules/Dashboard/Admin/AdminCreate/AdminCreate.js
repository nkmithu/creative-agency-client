import React from 'react';
import { useState } from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import Topbar from '../../SharedComponents/Topbar/Topbar';

const AdminCreate = () => {

    const [admin, setAdmin] =useState({});

    const handleOnBlur =(e)=>{
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
        console.log(newAdmin);
    }

    const handleOnSubmit =(e)=>{
        const newAdmin = {
            ...admin
        };
        fetch('https://mysterious-ravine-13058.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAdmin)
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
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input onBlur={handleOnBlur} name="email" type="email" className="form-control" placeholder="jon@email.com"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div>
                                            <button type="submit" className="btn btn-secondary submit-green-btn">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AdminCreate;