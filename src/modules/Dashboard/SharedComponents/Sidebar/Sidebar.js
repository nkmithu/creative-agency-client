import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <aside className="sidebar-wrapper p-4 bg-white">
            <figure>
                <img src={require('../../../../resourses/images/logos/logo.png')} className="logo" alt=""/>
            </figure>
            <nav className="mt-5">
                <ul className="dashboard-menu-items">
                    <li>
                        <Link></Link>
                        <Link to="/clientOrder"><img src={require('../../../../resourses/images/logos/shopping-cart.svg')} alt=""/> Order</Link>
                    
                    </li>
                    <li>
                        <Link to="/clientServices"><img src={require('../../../../resourses/images/logos/serviceList.svg')} alt=""/> Service List</Link>
                    
                    </li>
                    <li>
                        <Link to="/clientReview"><img src={require('../../../../resourses/images/logos/reviewIcon.svg')} alt=""/> Review</Link>
                    
                    </li>
                    <li>
                        <Link to="/admin"><img src={require('../../../../resourses/images/logos/serviceList.svg')} alt=""/> Client List</Link>
                    
                    </li>
                    <li>
                        <Link to="/adminAddService"><img src={require('../../../../resourses/images/logos/plus.svg')} alt=""/> Add Service</Link>
                    
                    </li>
                    <li>
                        <Link to="/adminCreate"><img src={require('../../../../resourses/images/logos/person-add.svg')} alt=""/> Make Admin </Link>
                    
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;