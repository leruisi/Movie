import React, { useEffect, useState } from 'react';
import { moviesService } from '../../services';
import { IMovie } from '../../interface/MovieInterface';
import { Movie } from './Movie';

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>({ results:[]}); // Initialize 'movies' state as an empty array

    useEffect(() => {
        moviesService.getAll()
            .then(({data:{results}}) => setMovies(results))
            .catch((error) => {
                console.error('Произошла ошибка при получении фильмов:', error);
            });
    }, []);

    return (
        <div>
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export { Movies };

