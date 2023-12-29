import { Link } from 'react-router-dom'

function CaseStudy() {
  return (
    <section className="case-study" aria-labelledby="case-study-title" id='work-section'>
        <div className="case-study__img">
            <img src="./assets/images/case-study-1.png" alt="Mobile app" />
        </div>

        <div className="case-study__content">
            <p className="label">Fur-ever Rehome Foundation</p>
            <h2 className="title" id="case-study-title">Building a worldwide app design to adopt rescued dogs</h2>
            <p className="paragraph">It’s time to find those dogs a new home and make a difference in the world.</p>
            <button className="btn"><Link to='/work/fur-ever'>View Project</Link></button>
        </div>
    </section>
  )
}

export default CaseStudy