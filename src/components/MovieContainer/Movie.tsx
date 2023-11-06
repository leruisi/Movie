import React, {FC} from 'react';
import {IMovie} from "../../interface/MovieInterface";
import style from './Movies.module.css'

interface IProps{
    movie:IMovie
}
const Movie: FC<IProps> = ({movie}) => {
    const{id,title,poster_path,release_date} = movie
    return (
        <div className={style.Movies}>
            <div>{id}</div>
            <h2>{title}</h2>
            { poster_path && <img src={`https://image.tmdb.org/t/p/${poster_path}`} alt={title}/>}
            <p>{release_date}</p>


        </div>
    );
};

export {Movie};