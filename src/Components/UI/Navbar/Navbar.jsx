import React, { useContext } from "react";
import {  Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () =>{
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <div className='navbar'>
            <MyButton onClick={logout}>Выйти</MyButton>
            <div className='navbar__items'>
                <Link to="/posts">Home</Link> <p></p>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar;