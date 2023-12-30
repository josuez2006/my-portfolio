import StepHeader from "./StepHeader"

function ThirdStep() {
  return (
    <section className='full-width' aria-label="Third step of my approach">
        <StepHeader step_number='Third' step_name='Create' />

        <section>
            <div>
                <h4 className="title">Mockups and prototypes</h4>
                <p className="paragraph">As I build the mockup, I make a lot of changes from the initial sketch. For a better productivity and creativity, I prefer to skip wireframing. Here it’s the first prototype created.</p>
            </div>
            {/* <img src="./assets/images/Fur-Ever/IA.jpg" alt="" /> */}
        </section>

    </section>
  )
}

export default ThirdStep