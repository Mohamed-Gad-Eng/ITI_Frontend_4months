import React from 'react'
import Home from '../../pages/Home'
import About from '../../pages/AboutUs'
import Products from '../../pages/products'
import Details from '../../pages/products/details'
import Login from '../../pages/Login'
import NotFound from '../../pages/NotFound'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import Header from '../Navbar'
import Footer from '../Footer'
import Layout from '../Layout'
import { getAllProducts } from '../../services/products.api'
import Error from '../Error'

const routes = createBrowserRouter([
    { path: '/login', element: <Login /> },

    {
        path: '',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
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
