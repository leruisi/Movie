import axios from "axios";
import {baseURL} from "../constant/urls";



const axiosService = axios.create({baseURL})

export {
    axiosService
}