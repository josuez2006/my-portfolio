import React from 'react'
import StepHeader from './StepHeader'

function SecondStep() {
  return (
    <section aria-label='Second step of my approach'>
        <StepHeader step_number='Second' step_name='Think' />

        <div>

            <section>
                <div>
                    <h4 className="title">Information architecture</h4>
                    <p className="paragraph">Before creating anything, we need a picture of what we want. So, I made the IA to see the structure of how pages relate to each other. </p>
                </div>
                <img src="./assets/images/Fur-Ever/IA.jpg" alt="" />
            </section>

            <section>
                <div>
                    <h4 className="title">Sketches</h4>
                    <p className="paragraph">Once we know how the app works, It’s time to sketch possible solutions. Sketches are a great way to get creative and make tons of ideas without constrains.</p>
                </div>
                <img src="./assets/images/Fur-Ever/Sketches.jpg" alt="" />
            </section>

        </div>

    </section>
  )
}

export default SecondStep