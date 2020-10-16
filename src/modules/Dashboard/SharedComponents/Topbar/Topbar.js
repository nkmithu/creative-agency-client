import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';

const Topbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
    return (
        <div className="topbar d-flex p-4 align-items-center justify-content-between bg-white">
            <h4 className="font-20">Order</h4>
            <p>{loggedInUser.name} </p>
        </div>
    );
};

export default Topbar;