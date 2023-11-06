import React from 'react';
import {Movies} from "../components/MovieContainer/Movies";
import {Outlet} from "react-router-dom";

const MoviePage = () => {
    return (
        <div>
            movie
<Movies/>
            <Outlet/>
        </div>
    );
};

export {MoviePage};