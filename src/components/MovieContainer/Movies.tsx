import React, { useEffect, useState } from 'react';
import { moviesService } from '../../services';
import { IMovie } from '../../interface/MovieInterface';
import { Movie } from './Movie';

const Movies = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const fetchMovies = async ()=>{
            try{
                const response = await moviesService.getAll();
                const {results}= response.data;
                setMovies(results)
                console.log(results)
            }
            catch (error){ console.log("error, Try again")
            }
        fetchMovies()}
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

