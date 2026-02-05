import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{

    },
    params:{
        api_key:'56e62a88c0615b7638a40b4e632f3c3f'
    }
})