import React, {FC} from 'react';
import {IMovie} from "../../../interface/MovieInterface";
import style from './Movie.module.css'

interface IProps{
    movie:IMovie
}
const Movie: FC<IProps> = ({movie}) => {
    const{title,poster_path,release_date} = movie
    return (
        <div >
            <div className={style.movie}>
                <h3>{title}</h3>
                <div className={style.movieImg}>
                    {poster_path && <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="img"/>}
                </div>
                <p className={style.movieInfo}>{release_date}</p>
                <button className={style.btnDetails}>details</button>
            </div>
        </div>
    );
};

export {Movie};