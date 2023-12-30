import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Wrapper() {
  return (
    <div className='content-grid'>
        <Navbar />

        <Outlet />

        <Footer />
    </div>
  )
}

export default Wrapper