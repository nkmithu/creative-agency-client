import React from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import Topbar from '../../SharedComponents/Topbar/Topbar';
const ClientOrder = () => {
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
                                <input type="email" class="form-control" placeholder="Your email address"/>
                            </div>
                            <div className="form-group">
                                <input type="text" class="form-control" placeholder="Your/Company Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" class="form-control" placeholder="Graphics Design"/>
                            </div>
                            <div className="form-group">
                               <textarea className="form-control" name="" id="" cols="10" rows="5" placeholder="Project details"></textarea>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                  <div className="col-lg-6 col-sm-12">
                                  <input type="number" class="form-control" placeholder="Price"/>
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