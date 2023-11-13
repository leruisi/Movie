import React, { FC } from 'react';
import { IMovie } from '../../interface/MovieInterface';

interface IProps {
    movie: IMovie;
}

const MovieInfo: FC<IProps> = ({ movie }) => {
    const { title, poster_path, release_date, original_language, vote_average, overview } = movie;

    return (
        <div>
            <h2>{title}</h2>
            <img src={poster_path} alt={title} />
            <p>Release Date: {release_date}</p>
            <p>Language: {original_language}</p>
            <p>Vote Average: {vote_average}</p>
            <p>Overview: {overview}</p>
        </div>
    );
};

export { MovieInfo };
