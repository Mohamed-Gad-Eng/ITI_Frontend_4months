import React from 'react'
import {  BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes  } from "react-router";
import NotFound from '../pages/NotFound'
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Films from "../pages/films";
import Details from '../pages/Details';
import Favorites from '../pages/Favorite';
import Signup from '../pages/Register';
import Login from '../pages/Login';



const routes = createBrowserRouter([
    {
        path: '', 
        element: <Layout/>,
        children: [
            {path: '/home', element: <Home/>},
            {path: '/favorites', element: <Favorites/>},
            {path: '/signin', element: <Login/>},
            {path: '/signup', element: <Signup/>},
            {path: '/', element: <Films/>},
            {path: '/film-details/:id', element: <Details/>},
            { path: '*', element: <NotFound /> }
        ]
    },
])

export default function AppRoutes(){
    return(
        <RouterProvider router={routes} />
    )
}
