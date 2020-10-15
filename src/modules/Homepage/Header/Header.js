import React from 'react';
import HeaderBody from './HeaderBody/HeaderBody';
import NavArea from './NavArea/NavArea';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <NavArea/>
            <HeaderBody/>
        </div>
    );
};

export default Header;