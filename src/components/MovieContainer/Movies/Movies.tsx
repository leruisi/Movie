import React, { useEffect, useState} from 'react';

import {moviesService, searchService} from '../../../services';
import {IMovie} from '../../../interface/MovieInterface';
import { Movie } from '../Movie/Movie';
import {useSearchParams} from "react-router-dom";
import style from "./Movies.module.css"






const Movies = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [totalPage, setTotalPage]=useState(1)
    const [loading, setLoading] = useState(false)
    const [searchQuer, setSearchQuer] = useState( '')
    const page = query.get('page') || '1';


    const fetchMovies = async () => {
        try {
            const response = await moviesService.getAll(page);
            const { results,total_pages } = response.data;
            setMovies(results.slice(0, 6));
            setTotalPage(totalPage)
            setTimeout(()=>{
                setLoading(true)
            },1000)
            console.log(results);
        } catch (error) {
            console.log('Ошибка');
        }
    };

    const fetchSearchMovies = async (searchTerm: string) => {
        try {
            const response = await searchService.getAll(searchTerm);
            const { results } = response.data;
            setMovies(results.slice(0, 6));
        } catch (error) {
            console.log('Ошибка');
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [page]);

    useEffect(() => {
        if (searchQuer) {
            fetchSearchMovies(searchQuer);
        } else {
            fetchMovies();
        }
    }, [searchQuer]);








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
        <div >
            <div className={style.search}>
            <input type={"text"}
            value={searchQuer}
                   onChange={(e)=>{
                       setSearchQuer(e.target.value)
                       console.log(e.target.value)
                   }}
                   placeholder={'Search'}
            />
            <button onClick={() =>setSearchQuer('')} >Clean</button>
            </div>
            <div className={style.movieCard}>{movies.map((movie) => (
                <Movie key={movie.id} movie={movie}/>
            ))}
            </div>
            <div className={style.buttons}>
                <button disabled={page === '1'} onClick={prevHandler}>
                    &#8592;
                </button>
                <p>Page | {page}</p>
                <button disabled={page === '500'} onClick={nextHandler}>&#8594;</button>
            </div>

        </div>
    );

};

export { Movies };

