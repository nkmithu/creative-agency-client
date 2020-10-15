import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <main>
            <div className="mt-3">
                <img
                    src={require('../../resourses/images/logos/logo.png')}
                    alt=""
                    className="logo d-block mx-auto"/>
            </div>
            <section className="login-section">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 offset-lg-6 col-sm-12 mx-auto">
                            <div className="card login-card p-3">
                                <h4 className="font-24 text-center">Login With</h4>
                                <button className="google-login-btn mt-4"><img
                                    src={require('../../resourses/images/logos//G__Logo.svg')}
                                    alt=""
                                    className="mr-5"/>Continue with Google</button>

                                    <p className="mt-3 text-center">Don't have an account? <a href="">Create Account</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </main>
    );
};

export default Login;