import React from 'react';
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
                        <a href=""><img src={require('../../../../resourses/images/logos/shopping-cart.svg')} alt=""/> Order</a>
                    
                    </li>
                    <li>
                        <a href=""><img src={require('../../../../resourses/images/logos/serviceList.svg')} alt=""/> Service List</a>
                    
                    </li>
                    <li>
                        <a href=""><img src={require('../../../../resourses/images/logos/reviewIcon.svg')} alt=""/> Review</a>
                    
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;