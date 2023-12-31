import StepHeader from "../StepHeader"
import CompetitorAnalysis from "./CompetitorAnalysis"

function FirstStep() {
  return (
    <section className="full-width">

        <StepHeader step_number='First' step_name='Understand' />

        <CompetitorAnalysis />

    </section>
  )
}

export default FirstStep