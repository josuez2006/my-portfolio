import CaseStudy from '../Layouts/CaseStudy'
import Hero from '../Layouts/Hero'
import Navbar from '../Layouts/Navbar'

function Home() {
  return (
    <div className='content-grid'>
        <Navbar />
        <Hero />
        <CaseStudy />
    </div>
  )
}

export default Home