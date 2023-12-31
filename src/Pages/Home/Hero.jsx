import LinkAsButton from '../../Components/LinkAsButton'

function Hero() {
  return (

      <section className="section-gap | hero" id="hero">
        
          <img className='hero__img' src="./assets/images/Hero.svg" alt="" />

          <div className="group-gap-xl | hero__content">

            <header className="text-gap-md">
              <p className="label">Hey, my name's Josué 😄</p>

              <div className="text-gap-md">
                <h1 className="heading uppercase ">I <span className="clr-accent-400">love</span> solving root problems</h1>
                <p className="paragraph">Comming up with a solution isn't enough if it doesn't solve the right problem.</p>

              </div>
            </header>

            <LinkAsButton to='/work'>See my work</LinkAsButton>
          </div>
          
      </section>

  )
}

export default Hero