import React, { useRef } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Wrapper() {
  const homeHeroRef = useRef(null)
  const aboutHeroRef = useRef(null)
  const workHeroRef = useRef(null)
  const contactRef = useRef(null)
  
  return (
    <div className='content-grid'>
        <Navbar />

        <Outlet />

        <Footer />
    </div>
  )
}

export default Wrapper