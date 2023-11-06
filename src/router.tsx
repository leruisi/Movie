import {createBrowserRouter, Navigate} from "react-router-dom";
import React from "react";
import {MainLayout} from "./Layout/MainLayout";
import {GenresPage, MoviePage, SearchPage} from "./pages";



const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movie'}/>},
            {path: 'movie', element: <MoviePage/>},
            {
                path: 'genres', element: <GenresPage/>, children: [
                    {path: 'search', element: <SearchPage/>}
                ]
            },
        ]
    }
]);

export {
    router
}