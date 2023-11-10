import {IRes} from "../types/IRes";
import {IMovieResonse} from "../interface/MovieInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constant/urls";
import {api_key} from "../constant/apiURLS";

const genresService={
 getAll: (page: string):IRes<IMovieResonse>=>axiosService.get(urls.genre.base+api_key, {params: {page}})
}
export {
    genresService
}