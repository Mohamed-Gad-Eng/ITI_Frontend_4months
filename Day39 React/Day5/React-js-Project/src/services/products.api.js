import { axiosInstance } from "./axiosInstance"
export function getAllProducts() {

    return axiosInstance.get('products', {
        headers: {
            'lang': 'ar'
        },
        params: {
            limit: 10
        }
    })
}

export function getProductByid(id) {
    return axiosInstance.get(`products/${id}`,{
        headers:{
            'Authorization':'lkdgdf65465fd'
        }
    })
}