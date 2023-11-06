import React, { useEffect, useState } from 'react';

import { moviesService } from '../../services';
import { IMovie } from '../../interface/MovieInterface';
import { Movie } from './Movie';
import {useSearchParams} from "react-router-dom";
import style from "./Movies.module.css"

const Movies = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page') || '1';

    useEffect(() => {
        const fetchMovies = async ()=>{
            try{
                const response = await moviesService.getAll(page);
                const {results}= response.data;
                setMovies(results.slice(0,7))
                console.log(results)
            }
            catch (error){ console.log("error, Try again")
            }
        fetchMovies()}
    }, [page]);

    const prevHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    };

    const nextHandler = () => {
        setQuery(prev => {
            prev.set('page', `${(1 + +page)}`)
            return prev
        })
    };
    return (
        <div>
            <div>{movies.map((movie) => (
                <Movie key={movie.id} movie={movie}/>
            ))}
            </div>
            <div className={style.buttons}>
                <button disabled={page === '1'} onClick={prevHandler}>
                    Prev
                </button>
                <button onClick={nextHandler}>Next</button>
            </div>
        </div>
    );
};

export { Movies };

