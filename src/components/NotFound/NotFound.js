import React from 'react';
import './NotFoumd.css'
import img from '../../bannar/NotFound.png'
import { NavLink } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <div className="text-center text-danger">
                <img src={img} alt="" />
            </div>
            <div className="text-center">
                <p className="text-danger ">opps! page not found</p>
                <NavLink className="go" to="/home">Go back</NavLink>
            </div>
        </div>

    );
};

export default NotFound;