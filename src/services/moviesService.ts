import {axiosService} from "./axiosService";

import {IRes} from "../types/IRes";
import { IMovieResonse} from "../interface/MovieInterface";
import {api_key} from "../constant/apiURLS";
import {urls} from "../constant/urls";



const moviesService = {

    getAll: (page: string): IRes<IMovieResonse> => axiosService.get(urls.movie.base+api_key, {params: {page}})

}

export {
 moviesService
}