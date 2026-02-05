import React from 'react'
import { useRouteError } from 'react-router'

export default function Error() {

  const error=useRouteError()
  console.log(error);
  
  return (
    // <h1>{error.data} {error.status}</h1>
    <h1 className='text-center'>No Product Data</h1>
  )
}
