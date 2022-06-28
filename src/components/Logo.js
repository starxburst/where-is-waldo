import React from "react";
import '../style/Logo.css'
import logo from '../assets/logo.png'

function Logo() {
    return (
        <div className='logo-container'>
            <img src={logo} alt='logo' className='logo'/>
        </div>
    )
}

export default Logo;