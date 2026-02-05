import React, { Suspense } from 'react'
import Home from '../pages/Home'
import Details from '../pages/products/details'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import Header from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import { getAllProducts } from '../services/products.api'
import Error from '../components/Error'
import LoginV2 from '../pages/Login/login2'
import Register from '../pages/Register'
import Spinner from '../components/Spinner'
import Private from '../components/Private'


const Products=React.lazy(()=>import('../pages/products'))
const About=React.lazy(()=>import('../pages/AboutUs'))


const routes = createBrowserRouter([
    { path: '/login', element: <Login /> },

    {
        path: '',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element:<About /> },
            {
                path: '/products',
                element: <Products />
                // loader: async (args) => {
                //     // console.log(args);
                //     try {
                //         const res = await getAllProducts();
                //         return res.data.products
                //     } catch (err) {
                //         throw new Response(err.message, {
                //             status: err.status
                //         })
                //     }

                // },
                // errorElement:<Error/>
            },
            { path: '/product-details/:id', element: <Details /> },
    

        ]
    },
    { path: '/register', element: <Register /> },
    { path: '*', element: <NotFound /> }
])
export default function AppRoutes() {

    return (

        <RouterProvider router={routes} />

        // <BrowserRouter>
        //     <Header />
        //     <Routes>
        //         <Route path='/' element={<Home />} />
        //         <Route path='/about' element={<About />} />
        //         <Route path='/products' element={<Products />} />
        //         <Route path='/product-details/:id' element={<Details />} />
        //         <Route path='/login' element={<Login />} />
        //         <Route path='*' element={<NotFound />} />
        //     </Routes>
        //     <Footer />
        // </BrowserRouter>
    )
}
