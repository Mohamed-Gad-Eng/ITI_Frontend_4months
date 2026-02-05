import React, { Suspense } from 'react'
import Header from '../Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router'
import Spinner from '../Spinner'
import Private from '../Private'

export default function Layout() {
  return (
    <>
      <Header />
      <Private>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Private>
      <Footer />
    </>
  )
}
