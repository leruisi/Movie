

const baseURL = 'https://api.themoviedb.org/3';



const movie = '/discover/movie'
const genres = '/genre';


 const urls={
    movie:{
        base:movie,
        byMoviesId:(id:number):string=> `${movie}/${id}`
    },
     genres:{
        base: genres,
         byId: (id: number): string => `${genres}/${id}`
     }

 }

export {
    baseURL,
    urls,
}