import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { getAllProducts } from '../../services/products.api';
import { useLoaderData } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import { productsAction, updateProducts } from '../../store/slices/products';
export default function Products() {
    // const productsData = useLoaderData()

    // const [products, setProducts] = useState([])

    // const loader = useSelector((state) => state.loader.loader)
    const productsState = useSelector((state) => state.products)

    const dispatch = useDispatch()

    // const getProducts = async () => {
    //     // axios.get('https://dummyjson.com/products').then((res) => {
    //     //     setProducts(res.data.products)
    //     // }).catch((err) => {
    //     //     console.log(err);
    //     // })
    //     try {
    //         const res = await getAllProducts()
    //         setProducts(res.data.products)
    //     } catch (err) {
    //         console.log(err);

    //     }
    // }


    useEffect(() => {
        // getProducts()

        dispatch(productsAction())
    }, [])


    const handleDelete = (id) => {
        const newProducts = productsState.products.filter((prd) => prd.id != id)
        // setProducts(newProducts)
        dispatch(updateProducts(newProducts))
    }

    return (

        <>

            {(productsState.loading) ? <Spinner /> : 
            (productsState.error) ? <h1>{productsState.error.message}</h1> : 
            <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
                {productsState.products.map((prd) => {
                    //   props
                    return <Card product={prd} handleDeleteProduct={handleDelete} key={prd.id} />
                })}


            </div>}
        </>
    )
}
