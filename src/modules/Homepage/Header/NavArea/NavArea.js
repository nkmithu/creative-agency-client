import React from 'react';
import './NavArea.css';

const NavArea = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img src={require("../../../../resourses/images/logos/logo.png")} alt=""/></a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-secondary" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavArea;