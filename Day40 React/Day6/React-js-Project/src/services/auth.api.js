import { axiosInstance } from "./axiosInstance";

export function login(user) {
   return axiosInstance.post('auth/login', user, {
        headers: { 'Content-Type': 'application/json' }
    })
}