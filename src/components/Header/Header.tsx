import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {LoginUser} from "../UserInfo";
import {Theme} from "../Theme/Theme";

const Header = () => {
    return (
        <div className={style.Header}>
            <h2>Movie DB</h2>
            <NavLink to={"/movie"}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <LoginUser/>
            <Theme/>
        </div>
    );
};

export default Header;