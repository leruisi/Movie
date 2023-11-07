export interface IMovie  {
    // page:number;
    id: number;
    original_language:string;
    original_title:string;
    overview:string;
    poster_path: string;
    release_date: string;
        title: string;
        vote_average: number

}

export interface IMovieResonse{
    page:number,
    results:IMovie[],
    total_pages:number,
    total_results: number
}