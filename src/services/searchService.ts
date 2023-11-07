
import {IRes} from "../types/IRes";
import {IMovieResonse} from "../interface/MovieInterface";
import {axiosService} from "./axiosService";
import {searchEnpoint} from "../constant/apiURLS";


const searchService={
getAll:(searchTerm:string):IRes<IMovieResonse> => axiosService.get(searchEnpoint,{params:{searchTerm}})}

export {searchService}