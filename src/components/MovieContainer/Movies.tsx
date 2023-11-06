import React, {useEffect, useState} from 'react';
import {moviesService} from "../../services";
import {IMovie} from "../../interface/MovieInterface";
import {Movie} from "./Movie";


const Movies = () => {

    const [movies, setMovies] = useState<IMovie[]>([])
    useEffect(() => {
        moviesService.getAll()
            .then((response) => setMovies(response.data))
            .catch((error) => {
                console.error("Произошла ошибка при получении фильмов:", error);
            });
    }, []);



    return (
        <div>
            {movies.map(movie =><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};