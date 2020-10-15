import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact-wrapper mt-5">
            <div className="container">
                <div className="row mt-5 py-5">
                    <div className="col-lg-6">
                        <h4 className="font-34 pt-5">Let us handle your project, professionally.</h4>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and
                            web apps in general.</p>
                    </div>
                    <div className="col-lg-6">
                        <form action="">
                            <div className="form-group">
                                <input type="email" class="form-control" placeholder="Your email address"/>
                            </div>
                            <div className="form-group">
                                <input type="text" class="form-control" placeholder="Your/Company Name"/>
                            </div>
                            <div className="form-group">
                               <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                            </div>
                            <div>
                                <button className="btn btn-secondary">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-12 mt-5 pt-5">
                        <p className="text-center">copyright Orange labs 2020</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;