import TwoColumnContainer from "../TwoColumnContainer"
import NumberedList from "./NumberedList"

function MyApproach() {
  return (
    <section className="section" aria-label='My approach to tackle the problem'>

        <TwoColumnContainer>

            <div className="text-group">
                <h2 className="title">My aproach</h2>
                <p className="paragraph">The best way to reach millions of people is throughout their phones. So, I designed an app and I followed this process:</p>
            </div>

            <NumberedList>
                <>
                    <p className="label">Understand</p>
                    <p className="paragraph">Define the problem, do the research and analyze the data.</p>
                </>

                <>
                    <p className="label">Think</p>
                    <p className="paragraph">Make the IA, do some sketches and do more sketches.</p>
                </>

                <>
                    <p className="label">Create</p>
                    <p className="paragraph">Build mock-ups and interactive prototypes.</p>
                </>

                <>
                    <p className="label">Test</p>
                    <p className="paragraph">Do the testing, analyze the data and recreate.</p>
                </>
            </NumberedList>

        </TwoColumnContainer>

    </section>
  )
}

export default MyApproach