import axios from 'axios'

export const axiosInstance=axios.create({
    baseURL:'https://dummyjson.com/',
    headers:{
      'Authorization':'dfdf5645'
    },
    params:{
      api_key:'fgrfgnjf'
    }
})