
import React, { useEffect, useState} from 'react';

import {genresService,  searchService} from '../../../services';
import {Genre} from "../Genre/Genre";
import {IGenre} from "../../../interface/GenreInterface";
const Genres = () => {

    const [genres, setGenres] = useState<IGenre[]>([]);
    const [searchQuer, setSearchQuer] = useState( '')

    const fetchGenres = async () => {
        try {
            const response = await genresService.getAll();
            const { genre} = response.data;
            console.log(genres);
        } catch (error) {
            console.log('Ошибка');
        }
    };

    const fetchSearchGenres = async (searchTerm: string) => {
        try {
            const response = await searchService.getAll(searchTerm);
            const { genre} = response.data;
            setGenres(genres.slice(0, 6));
        } catch (error) {
            console.log('Ошибка');
        }
    };

    useEffect(() => {
        fetchGenres();
    }, []);

    useEffect(() => {
        if (searchQuer) {
            fetchSearchGenres(searchQuer);
        } else {
            fetchGenres();
        }
    }, [searchQuer]);


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


        </div>
    );

};

export { Genres };
