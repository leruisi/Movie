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
            <div className={style.movieCard}>
                <div className={style.movie}>
                    <div>{id}</div>
                    <h2>{title}</h2>
                    <div className={style.movieImg}>{poster_path && <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt='img'/>}</div>
                    <h4 className={style.movieIninfo}>{title}</h4>
                    <p className={style.movieInnfo}>{release_date}</p></div>
            </div>
        </div>
    );
};

export {Movie};