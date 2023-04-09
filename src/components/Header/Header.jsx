import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex gap-3 text-blue-600 font-semibold justify-center'>
            <Link to="/">Home</Link>
            <Link to="/order">Order Review</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/grandfa">Grandfa</Link>
        </div>
       
    );
};

export default Header;