import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {LoginUser} from "../UserInfo";
import {MoviePage} from "../../pages";
const Header = () => {
    return (
        <div className={style.Header}>
            <h2>Movie DB</h2>
            <NavLink to={"/movie"}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <LoginUser/>
        </div>
    );
};

export default Header;