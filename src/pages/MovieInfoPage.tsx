import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieInfo } from '../components/MovieInfo';
import { IMovie } from '../interface/MovieInterface';
import { moviesService } from "../services";

interface IParams {
    id:IMovie;
}

const MovieInfoPage: FC = () => {
    const { id } = useParams<IParams>();
    const [movie, setMovie] = useState<IMovie (null);

    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                const response = await moviesService.getById(id);
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchMovieById();

    }, [id]);

    return (
        <div>
            {movie ? <MovieInfo movie={movie} /> : <p>Loading...</p>}
        </div>
    );
};

export { MovieInfoPage };

