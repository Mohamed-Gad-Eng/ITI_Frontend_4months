import { axiosInstance } from "./axiosInstance";

export function getAllFilms(page_num) {
    return axiosInstance.get('movie/popular', {
        headers: {

        },
        params: {
            page: page_num
        }
    })
}

export function getFilmById(id) {
    return axiosInstance.get(`movie/${id}`, {
        headers: {

        },
        params: {
            
        }
    })
}

