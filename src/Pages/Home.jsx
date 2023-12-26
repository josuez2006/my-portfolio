import CaseStudy from '../Layouts/CaseStudy'
import Footer from '../Layouts/Footer'
import Hero from '../Layouts/Hero'
import Navbar from '../Layouts/Navbar'

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