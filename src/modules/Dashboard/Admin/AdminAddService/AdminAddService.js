import React from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import Topbar from '../../SharedComponents/Topbar/Topbar';
import './AdminAddService.css'

const AdminAddService = () => {
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
                                            <input type="text" className="form-control" placeholder="Service Title"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="input-group mb-3">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                                                <label className="custom-file-label" for="inputGroupFile01">Upload Image</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        name=""
                                        id=""
                                        cols="10"
                                        rows="5"
                                        placeholder="Description"></textarea>
                                </div>

                                <div>
                                    <button className="btn btn-secondary submit-green-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AdminAddService;