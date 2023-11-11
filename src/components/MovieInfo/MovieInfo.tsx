import React, {FC} from 'react';
import {IMovie} from "../../interface/MovieInterface";
interface IProps{
    movie:IMovie
}



const MovieInfo:FC<IProps> = ({movie}) => {
    const{title,poster_path,release_date,original_language,vote_average,overview} = movie
    return (
        <div>
            {title}
            {poster_path}
            {release_date}
            {original_language}
            {vote_average}
            {overview}
            </div>
    );
};

export {MovieInfo};