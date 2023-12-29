import { useRef, useState } from 'react'

import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import CaseStudy from './Layouts/CaseStudy'
import Hero from './Layouts/Hero'

function Home() {
  const heroRef = useRef(null)

  return (
    <div className='content-grid'>
        <Navbar ref={heroRef} />
        <Hero heroRef={heroRef} />
        <CaseStudy />
        <Footer />
    </div>
  )
}

export default Home