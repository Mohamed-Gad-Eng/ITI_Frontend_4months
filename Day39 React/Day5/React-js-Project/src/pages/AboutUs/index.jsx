import React, { useContext } from 'react'
import { useLocation, useSearchParams } from 'react-router'
import { ThemeContext } from '../../contexts/theme.context';

export default function About() {
//  const location= useLocation()
//  console.log(location);
 const {theme,setTheme} = useContext(ThemeContext)

 const [searchParams,setSearchParams] =useSearchParams()
 
 console.log(searchParams.get('name'));
  console.log(searchParams.get('job'));

  console.log(searchParams.getAll('name'));
  console.log(searchParams);
  

  return (
    <>
    <h1>About</h1>
    <button className={(theme=='light')?'bg-dark text-light':'bg-light text-dark'}
    onClick={()=>{setTheme((theme=='light')?'dark':'light')}}
    >
      {(theme=='light')?'Dark':'Light'}</button>
    </>
    
  )
}
