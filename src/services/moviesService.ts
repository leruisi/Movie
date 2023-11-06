import {axiosService} from "./axiosService";
import {IRes} from "../types/IRes";
import {IMovie} from "../interface/MovieInterface";
import {api_key, urls} from "../constant/urls";


const moviesService = {
    // getAll: (): IRes<IMovie[]> => axiosService.get(urls.movie.base+`${api_key}`)
    // getAll: (): IRes<IMovie[]> => axiosService.get(`${urls.movie.base}/${api_key}`)
    getAll: (): IRes<IMovie[]> => axiosService.get(urls.movie.base+api_key)

}

export {
 moviesService
}