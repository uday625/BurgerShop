import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo = (props) => {
    return (  
        <div className="Logo">
            <img src={logo} alt="BurgerLogo"/>
        </div>
    );
}
 
export default Logo;