import {IRes} from "../types/IRes";
import {axiosService} from "./axiosService";
import {urls} from "../constant/urls";
import {api_key} from "../constant/apiURLS";
import {IGenre} from "../interface/GenreInterface";

const genresService={
 getAll: ():IRes<IGenre>=>axiosService.get(urls.genre.base+api_key)
}
export {
    genresService
}