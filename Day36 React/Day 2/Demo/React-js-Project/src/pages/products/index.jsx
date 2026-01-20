import { useState } from 'react';
import Card from '../../components/Card';
import { products as productsArr } from '../../utils/data'

export default function Products() {
     const [products,setProducts] = useState(productsArr)


     const handleDelete=(id)=>{
        // console.log(id);
      const newProducts= products.filter((prd)=>prd.id!=id)
      setProducts(newProducts)
      /////////////////////////////////////////////////////////
    // const newArr=products.map((prd)=>({...prd,x:5}))
    // setProducts(newArr)
    //   setProducts([...products.map((prd)=>({...prd,x:5}))])
     }

    return (

        <>

            <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
                {products.map((prd) => {
                    //   props
                    return <Card product={prd} handleDeleteProduct={handleDelete}/>
                })}


            </div>
        </>
    )
}
