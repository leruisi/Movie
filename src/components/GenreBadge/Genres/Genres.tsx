
import React, { useEffect, useState} from 'react';

import {genresService,  searchService} from '../../../services';

import {useSearchParams} from "react-router-dom";
import {Genre} from "../Genre/Genre";
import {IGenre} from "../../../interface/GenreInterface";




const Genres = () => {

    const [genres, setGenres] = useState<IGenre[]>([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [totalPage, setTotalPage]=useState(1)
    const [loading, setLoading] = useState(false)
    const [searchQuer, setSearchQuer] = useState( '')
    const page = query.get('page') || '1';


    const fetchGenres = async () => {
        try {
            const response = await genresService.getAll(page);
            const { genres,total_pages } = response.data;
            setGenres(genres.slice(0, 6));
            setTotalPage(totalPage)
            setTimeout(()=>{
                setLoading(true)
            },1000)
            console.log(genres);
        } catch (error) {
            console.log('Ошибка');
        }
    };

    const fetchSearchGenres = async (searchTerm: string) => {
        try {
            const response = await searchService.getAll(searchTerm);
            const { genres } = response.data;
            setGenres(genres.slice(0, 6));
        } catch (error) {
            console.log('Ошибка');
        }
    };

    useEffect(() => {
        fetchGenres();
    }, [page]);

    useEffect(() => {
        if (searchQuer) {
            fetchSearchGenres(searchQuer);
        } else {
            fetchGenres();
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
            <div >
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
            <div>{genres.map((genre) => (
                <Genre key={genre.id} genre={genre}/>
            ))}
            </div>
            <div >
                <button disabled={page === '1'} onClick={prevHandler}>
                    &#8592;
                </button>
                <p>Page | {page}</p>
                <button disabled={page === '500'} onClick={nextHandler}>&#8594;</button>
            </div>

        </div>
    );

};

export { Genres };
