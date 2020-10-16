import React from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import Topbar from '../../SharedComponents/Topbar/Topbar';

const ClientReview = () => {
    return (
        <main className="d-flex dasboard-wrapper">
            <Sidebar/>
            <section className="contentWithTopbar">
                <Topbar/>
                <div className="container mt-5 py-5">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                        <form action="">
                            <div className="form-group">
                                <input type="text" class="form-control" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" class="form-control" placeholder="Company’s name, Designation"/>
                            </div>
                            <div className="form-group">
                               <textarea className="form-control" name="" id="" cols="10" rows="5" placeholder="Description"></textarea>
                            </div>
                            <div>
                                <button className="btn btn-secondary">Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ClientReview;