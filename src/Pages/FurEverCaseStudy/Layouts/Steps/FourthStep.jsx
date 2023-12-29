import StepHeader from "./StepHeader"

function FourthStep() {
  return (
    <section aria-label="Fourth step of my approach">
        <StepHeader step_number='Fourth' step_name='Test' />

        <section aria-label="Usability testing">

            <div>
                <h4 className="title">Usability testing</h4>
                <p className="paragraph">Testing how the user behaves in the app can detect a lot of ux issues that must be fixed.</p>
            </div>


            <div>
                <img src="./assets/images/Fur-Ever/usability testing/Not recognized.jpg" alt="" />
                <div>
                    <p className="label">Issue #1</p>
                    <h4 className="subtitle">Card is not recognized as touchable</h4>
                    <p className="paragraph">Sometimes, the users doesn’t know that they can touch the card to learn more about it. To fix this issue, a button was added.</p>
                </div>
            </div>
            <div>
                <img src="./assets/images/Fur-Ever/usability testing/Not understood.jpg" alt="" />
                <div>
                    <p className="label">Issue #2</p>
                    <h4 className="subtitle">The user doesn’t understand the step</h4>
                    <p className="paragraph">Too much info was asked when it was not needed. Therefore, it was deleted and a subtle change was made so the current step is clearer.</p>
                </div>
            </div>

        </section>

    </section>
  )
}

export default FourthStep