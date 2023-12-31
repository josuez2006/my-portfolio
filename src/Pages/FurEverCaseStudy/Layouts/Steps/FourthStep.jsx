import Card from "../../Components/Card"
import StepHeader from "./StepHeader"

function FourthStep() {
  return (
    <section className='full-width' aria-label="Fourth step of my approach">
        <StepHeader step_number='Fourth' step_name='Test' />

        <section className="section" aria-label="Usability testing">

            <div className="two-col-grid">
                <h4 className="title">Usability testing</h4>
                <p className="paragraph">Testing how the user behaves in the app can detect a lot of ux issues that must be fixed.</p>
            </div>


            <div className="usability-testing__content">
                <div className="card-with-img">
                    <img src="./assets/images/Fur-Ever/usability testing/Not recognized.jpg" alt="" />
                    <Card label='Issue #1' title='Card is not recognized as touchable' paragraph='Sometimes, the users doesn’t know that they can touch the card to learn more about it. To fix this issue, a button was added.' />
                </div>

                <div className="card-with-img right">
                    <Card label='Issue #2' title='The user doesn’t understand the step' paragraph='Too much info was asked when it was not needed. Therefore, it was deleted and a subtle change was made so the current step is clearer.' />
                    <img src="./assets/images/Fur-Ever/usability testing/Not understood.jpg" alt="" />
                </div>
            </div>
        </section>

    </section>
  )
}

export default FourthStep