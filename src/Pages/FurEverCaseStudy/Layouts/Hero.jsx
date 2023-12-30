import OverviewItem from "../Components/OverviewItem"

function Hero() {
  return (
    <section className="case-study-hero">

        <div className="intro">
            <img src="./assets/images/Fur-Ever/Hero.png" alt="Mobile app" className="intro__img"/>

            <header className="intro__header">
                <h1 className="heading">Building a worldwide app design to adopt rescued dogs</h1>
                <p className="foundation-name">Fur-ever Rehome Foundation</p>
            </header>
        </div>
         
         <div className="overview">
            <OverviewItem title='Role' content='UX/UI Designer' icon_src='./assets/icons/Person.svg' />
            <OverviewItem title='Project' content='Personal Project' icon_src='./assets/icons/Calendar.svg' />
            <OverviewItem title='Duration' content='2 weeks and 5 days' icon_src='./assets/icons/Clock.svg' />
         </div>

     </section>
  )
}

export default Hero