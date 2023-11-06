import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import {MoviePage} from "../pages";

const MainLayout = () => {
    return (
        <div>
            Main
            <Header/>
           <Outlet/>

        </div>
    );
};

export {MainLayout};