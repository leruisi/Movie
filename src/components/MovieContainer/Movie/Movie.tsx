import React, {FC} from 'react';
import {IMovie} from "../../../interface/MovieInterface";
import style from './Movie.module.css'
import StarRatings from 'react-star-ratings';
import {useNavigate} from "react-router-dom";
import {number} from "joi";
interface IProps{
    movie:IMovie
    id:IMovie

}

const Movie: FC<IProps> = ({movie,id}) => {
    const{title,poster_path,release_date,original_language,vote_average
    } = movie
    const navigate= useNavigate()

    return (
        <div >
            <div className={style.movie}>
                <h3>{title}</h3>
                <div className={style.movieImg}>
                    {poster_path && <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="img"/>}
                </div>
                <div className={style.raiting}><StarRatings
                    rating={vote_average}
                    starRatedColor="gold"
                    numberOfStars={10}
                    starDimension="20px"
                    starSpacing="2px"
                />
                <p >{vote_average}</p>
                </div>
                <p className={style.movieInfo}> release date: {release_date}</p>
                <div className={style.movieInfo}> original language: {original_language}</div>
                <button  onClick={()=>navigate(`${id}`, {state:{movie:movie}})} className={style.btnDetails}>details</button>
            </div>
        </div>
    );
};

export {Movie};