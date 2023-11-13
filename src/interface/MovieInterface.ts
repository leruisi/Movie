import {IGenre} from "./GenreInterface";

export interface IMovie  {
    id:number,
    original_language:string,
    original_title:string,
    overview:string,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
    vote_count: number
}

export interface IMovieResonse {
    page:number,
    results:IMovie[],
    total_pages:number,
    total_results: number
    genre:IGenre[]
}