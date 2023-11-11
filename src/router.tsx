import {createBrowserRouter, Navigate} from "react-router-dom";
import React from "react";

import {MainLayout} from "./Layout/MainLayout";
import {GenresPage, MovieInfoPage, MoviePage} from "./pages";



const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            {index: true, element: <Navigate to={'movie'}/>},
            {path: 'movie', element: <MoviePage/>},
            {path:'movie/:id', element:<MovieInfoPage/>},
            {path: 'genres', element: <GenresPage/>,
            },
        ]
    }
]);

export {
    router
}