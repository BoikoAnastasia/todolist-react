import React from "react";
import {  Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__items'>
                <Link to="/posts">Home</Link> <p></p>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar;