import Navbar from "../../Layouts/Navbar"
import Hero from "./Layouts/Hero"
import TheProblem from "./Layouts/SectionBreaker/TheProblem"
import MyApproach from "./Layouts/MyApproach"
import Steps from './Layouts/Steps'
import LastThoughts from "./Layouts/SectionBreaker/LastThoughts"
import ViewFigmaFile from "./Layouts/ViewFigmaFile"
import Footer from '../../Layouts/Footer'

function FurEverCaseStudy() {
  return (
    <div className="content-grid">
        <Navbar />
        
        <Hero /> 

        <TheProblem />

        <MyApproach />
        
        <Steps />

        <LastThoughts />

        <ViewFigmaFile />

        <Footer />

    </div>
  )
}

export default FurEverCaseStudy