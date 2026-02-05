import React from 'react'
import { useLocation, useSearchParams } from 'react-router'

export default function About() {
//  const location= useLocation()
//  console.log(location);

 const [searchParams,setSearchParams] =useSearchParams()
 
 console.log(searchParams.get('name'));
  console.log(searchParams.get('job'));

  console.log(searchParams.getAll('name'));
  console.log(searchParams);
  

  return (
    <h1>About</h1>
  )
}
