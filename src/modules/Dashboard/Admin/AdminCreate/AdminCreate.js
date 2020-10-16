import React from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import Topbar from '../../SharedComponents/Topbar/Topbar';

const AdminCreate = () => {
    return (
        <main className="d-flex dasboard-wrapper">
            <Sidebar/>
            <section className="contentWithTopbar">
                <Topbar/>
                <div className="container mt-5 py-5">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" placeholder="jon@email.com"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div>
                                            <button className="btn btn-secondary submit-green-btn">Submit</button>
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