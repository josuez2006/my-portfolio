
function Hero({ heroRef }) {

  return (

      <section className="hero" id="hero" ref={heroRef}>
          <img className='hero__img' src="./assets/images/Hero.svg" alt="" />

          <div className="hero__content">
            <div className="hero__text">
              <h1 className="heading"><span className="fw-regular">Design is</span> communication</h1>
              <p className="paragraph">My name’s Josue and I’m a great communicator</p>
            </div>
            <button className="btn">see my work</button>
          </div>
      </section>

  )
}

export default Hero