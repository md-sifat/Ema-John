import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <a href="#Home"><img src={logo} alt="" /></a>
            <div className="navs">
                <li><a href="#Shop">Shop</a></li>
                <li><a href="#Orders">Orders</a></li>
                <li><a href="#Inventory">Inventory</a></li>
                <li><a href="#About">About</a></li>
            </div>
        </nav>
    );
};

export default Header;