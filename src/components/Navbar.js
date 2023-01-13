import React from 'react';
import './Navbar.css';
import companyImg from'./companyImg.png'
const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={companyImg} alt="" srcset="" style={{width:'100px',height:'50px',marginTop:'10px',marginLeft:'100px'}}/>
            <div className="navbar-right">
            <a href="#home" className="navbar__link active">Home</a>
            <a href="#inventory" className="navbar__link">Inventory</a>
            <a href="#checkout" className="navbar__link">Checkout</a>
            </div>
        </nav>
    );
}

export default Navbar;
