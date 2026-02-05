import axios from 'axios'
import store from '../store'
import { changeLoader } from '../store/slices/loader'

export const axiosInstance=axios.create({
    baseURL:'https://dummyjson.com/',
    headers:{
      // 'Authorization':'dfdf5645' xxxxxx
    },
    params:{
      api_key:'fgrfgnjf'
    }
})


//request interceptor
axiosInstance.interceptors.request.use((req)=>{

  // console.log(req);
  // if(req.url.startsWith('products')){///products   /products/:id 
  //  req.headers.test='123456'
  // }
  if(req.url!='login'&&req.url!='register'){
   req.headers.Authorization='557kghlkgjh57587t'
  }

  // if(req.method=='get'){

  // }

  store.dispatch(changeLoader(true))
  return req
},(err)=>{

  return Promise.reject(err)
})


//reponse interceptor
axiosInstance.interceptors.response.use((res)=>{
  console.log(res);
  store.dispatch(changeLoader(false))
return res
},(err)=>{

  return Promise.reject(err)
})
