import {IRes} from "../types/IRes";
import {IMovieResonse} from "../interface/MovieInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constant/urls";

const genresService={
 getAll:(id:number):IRes<IMovieResonse>=>axiosService.get(urls.genres.base, {params:{id}})
}
export {
    genresService
}