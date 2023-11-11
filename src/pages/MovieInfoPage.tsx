import React, { FC } from 'react';
import { MovieInfo } from '../components/MovieInfo';
import { IMovie } from '../interface/MovieInterface';

interface IProps {
    movie: IMovie;
}

const MovieInfoPage: FC<IProps> = ({ movie}) => {

    return (
        <div>

                <MovieInfo  movie={movie}/>

        </div>
    );
};

export { MovieInfoPage };