import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getProductByid } from '../../services/products.api'
export default function Details() {
  const { id } = useParams()

  const [product, setProduct] = useState({})

  useEffect(() => {
    getProductByid(id).then((res) => {
      setProduct(res.data)
    }).catch((err) => {
      console.log(err);

    })
  }, [])
  return (
    <>
      <h1>Details</h1>
      <h3>{product.title}</h3>
    </>

  )
}
