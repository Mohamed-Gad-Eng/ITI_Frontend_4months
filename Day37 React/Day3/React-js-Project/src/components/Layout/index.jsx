import React from 'react'
import Header from '../Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
