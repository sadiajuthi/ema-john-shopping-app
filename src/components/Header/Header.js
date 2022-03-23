import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='menu-container'>
            <img className='logo' src={logo} alt="" />
            <div className='header'>
                <a href="Order">Order</a>
                <a href="Order Review">Order Review</a>
                <a href="Manage Invetory">Manage Invetory</a>
            </div>
        </nav>
    );
};

export default Header;