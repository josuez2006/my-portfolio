import Navbar from "../Layouts/Navbar"

function FurEverCaseStudy() {
  return (
    <>
        <Navbar />
        
        <section className="case-study__info">
            <h1 className="heading">Building a worldwide app design to adopt rescued dogs</h1>
            <p className="brand-name">Fur-ever Rehome Foundation</p>
            
            <div className="case-study__overview">
                <div className="case-study__detail">
                    <img src="" alt="" />

                    <div>
                        <p>Role</p>
                        <p>UI/UX Designer</p>
                    </div>
                </div>
            </div>
    
        </section>

        <section className="case-study__the-problem">
            <h2 className="title">The problem</h2>

            <div>
                <p className="paragraph">A worldwide business deals with dogs. Or in other words, it rescues dogs that have been abused or harmed and finds them a better home.</p>
                <p className="paragraph">Thousands of dogs are rescued every single day. It’s completely impossible to find enough suitable homes for all of them.</p>
            </div>
        </section>


        <section className="case-study__my-aproach">
            <h2 className="title">My aproach</h2>
            <p className="paragraph">The best way to reach millions of people is throughout their phones. So, I designed an app and I followed this process:</p>

            <div>
                <div>
                    <img src="" alt="" />

                    <div>
                        <p className="label">Understand</p>
                        <p className="paragraph">Define the problem, do the research and analyze the data.</p>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default FurEverCaseStudy