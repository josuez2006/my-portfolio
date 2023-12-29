import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import CaseStudy from './Layouts/CaseStudy'
import Hero from './Layouts/Hero'

function Home() {
  return (
    <div className='content-grid'>
        <Navbar />
        <Hero />
        <CaseStudy />
        <Footer />
    </div>
  )
}

export default Home