import React, { useEffect, useState} from 'react';

import {moviesService, searchService} from '../../../services';
import {IMovie} from '../../../interface/MovieInterface';
import { Movie } from '../Movie/Movie';
import {useSearchParams} from "react-router-dom";
import style from "./Movies.module.css"






const Movies = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [searchQuer, setSearchQuer] = useState( '')
    const page = query.get('page') || '1';


    const fetchMovies = async () => {
        try {
            const response = await moviesService.getAll(page);
            const { results } = response.data;
            setMovies(results.slice(0, 6));
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
            console.log(results);
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





    //
    // useEffect(() => {
    //         const fetchMovies = async () => {
    //             try {
    //                 const response = await moviesService.getAll(page);
    //                 const {results} = response.data;
    //                 setMovies(results.slice(0, 6))
    //
    //                 console.log(results)
    //             } catch (error) {
    //                 console.log("error, Try again")
    //             }
    //         }
    //         fetchMovies()
    //     },
    //     [page]);

// //////////////////////////////////////////////////////////
//     useEffect(() => {
//         const fetchSearchMovies = async () => {
//             try {
//                 const response = await searchService.getAll(films);
//                 const {results} = response.data;
//                 setMovies(results.slice(0, 6))
//
//                 console.log(results)
//             } catch (error) {
//                 console.log("error, Try again")
//             }
//         }
//         fetchSearchMovies()
//     }, [films]);

    /////////////////////////////////////////////////////////////////




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
            />
            <button onClick={() =>setSearchQuer('')} >Show All</button>
            </div>
            <div className={style.movieCard}>{movies.map((movie) => (
                <Movie key={movie.id} movie={movie}/>
            ))}
            </div>
            <div className={style.buttons}>
                <button disabled={page === '1'} onClick={prevHandler}>
                    Prev
                </button>
                <p>Page | {page}</p>
                <button  onClick={nextHandler}>Next</button>
            </div>

        </div>
    );

};

export { Movies };

