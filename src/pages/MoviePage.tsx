import React from 'react';
import {Movies} from "../components/MovieContainer/Movies/Movies";
import {Outlet} from "react-router-dom";

const MoviePage = () => {
    return (
        <div>
            movie
            <Movies/>


        </div>
    );
};

export {MoviePage};