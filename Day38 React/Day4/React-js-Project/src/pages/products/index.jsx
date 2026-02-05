import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { getAllProducts } from '../../services/products.api';
import { useLoaderData } from 'react-router';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
export default function Products() {
    // const productsData = useLoaderData()

    const [products, setProducts] = useState([])

    const loader = useSelector((state) => state.loader.loader)

    const getProducts = async () => {
        // axios.get('https://dummyjson.com/products').then((res) => {
        //     setProducts(res.data.products)
        // }).catch((err) => {
        //     console.log(err);
        // })
        try {
            const res = await getAllProducts()
            setProducts(res.data.products)
        } catch (err) {
            console.log(err);

        }
    }


    useEffect(() => {
        getProducts()
    }, [])


    const handleDelete = (id) => {
        const newProducts = products.filter((prd) => prd.id != id)
        setProducts(newProducts)
    }

    return (

        <>

            {(loader) ? <Spinner /> : <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
                {products.map((prd) => {
                    //   props
                    return <Card product={prd} handleDeleteProduct={handleDelete} key={prd.id} />
                })}


            </div>}
        </>
    )
}
