import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
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