import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={style.Header}>
            <h2>Movie DB</h2>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <NavLink to={'search'}>Search</NavLink>
        </div>
    );
};

export default Header;