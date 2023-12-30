import StepHeader from "./StepHeader"

function FirstStep() {
  return (
    <section className="full-width">
        <StepHeader step_number='First' step_name='Understand' />

        <section aria-label="Competior analysis">
          <div>
            <div>
              <h4 className="title">Competitor analysis</h4>
              <p className="paragraph">The competitors have made a lot of mistakes that we can learn to build a better app. I chose two of them for these purposes: Adopt Me and Pet Whatever.</p>
            </div>

            <div>
              <img src="./assets/images/Fur-Ever/competitor analysis/1.jpg" alt="" />
              <img src="./assets/images/Fur-Ever/competitor analysis/2.jpg" alt="" />
            </div>
          </div>

          <div>
            <div>
              <p className="label">Mistake #1</p>
              <h5 className="subtitle">Unnecessary ads</h5>
              <p className="paragraph">The core of the business is love, which is beyond advertising and money. The attention should be on the dogs that need to find a home soon.</p>
            </div>

            <div>
              <p className="label">Mistake #2</p>
              <h5 className="subtitle">Too many fonts and colours</h5>
              <p className="paragraph">Aesthetics gives trust. To represent a worldwide business the design must look nice to the eye.</p>
            </div>

            <div>
              <p className="label">Success #1</p>
              <h5 className="subtitle">Main colour choice</h5>
              <p className="paragraph">The blue colour also gives trust. It’s a good idea to use it. Combined it with a little of green shows the love to animals that this business is giving.</p>
            </div>

            <div>
              <p className="label">Success #2</p>
              <h5 className="subtitle">Enough info</h5>
              <p className="paragraph">It’s easy to understand how each dog behaves and looks like. Providing enough information is a must.</p>
            </div>
          </div>


        </section>


        
    </section>
  )
}

export default FirstStep