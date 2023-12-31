import Card from "../../../../Components/Card"
import Header from "./Header"

function CompetitorAnalysis() {
  return (
    <section className="section competitor-analysis" aria-label="Competior analysis">
      <Header />

      <div>
        <Card label='Mistake #1' title='UnesUnnecessary ads' paragraph='The core of the business is love, which is beyond advertising and money. The attention should be on the dogs that need to find a home soon.' />
        <Card label='Mistake #2' title='Too many fonts and colours' paragraph='Aesthetics gives trust. To represent a worldwide business the design must look nice to the eye.' />
        <Card label='Success #1' title='Main colour choice' paragraph='The blue colour also gives trust. It’s a good idea to use it. Combined it with a little of green shows the love to animals that this business is giving.' />
        <Card label='Success #2' title='Enough info' paragraph='It’s easy to understand how each dog behaves and looks like. Providing enough information is a must.' />
      </div>
    </section>
  )
}

export default CompetitorAnalysis