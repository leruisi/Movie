

const baseURL = 'https://api.themoviedb.org/3';



const movie = '/discover/movie'
const genre = '/genre/movie/list';


 const urls={
    movie:{
        base:movie,
        byMoviesId:(id:number):string=> `${movie}/${id}`
    },
     genre:{
        base: genre,
         byId: (id: number): string => `${genre}/${id}`
     }

 }

export {
    baseURL,
    urls,
}