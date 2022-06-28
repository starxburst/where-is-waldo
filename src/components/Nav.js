import React from "react";
import { Link } from "react-router-dom";
import '../style/Nav.css'

function Nav() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to='/home'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;