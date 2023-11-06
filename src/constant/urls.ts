

const baseURL = 'https://api.themoviedb.org/3';
const api_key = '?api_key=529b903749a42db6ea06107461d54ae2';
const movie = '/movie'
const genres = '/genres';
const search = '/search';

 const urls={
    movie:{
        base:movie,
        byMovieId:(id:number):string=> `${movie}/${id}`
    },
     genres:{
        base: genres,
         byId: (id: number): string => `${genres}/${id}`
     },
     search:{
         byId: (id: number): string => `${search}/${id}`
     }

 }

export {
    baseURL,
    urls,
    api_key
}