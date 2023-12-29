function SectionBreaker({title, paragraph1, paragraph2}) {
  const [title_first_word, title_second_word] = title.split(' ')

  return (
    <section className="section | section-breaker full-width">
      <div>
        <h2 className="title">{title_first_word} <span className="clr-accent-400">{title_second_word}</span></h2>

        <div>
            <p className="paragraph">{paragraph1}</p>
            <p className="paragraph">{paragraph2}</p>
        </div>
      </div>
    </section>
  )
}

export default SectionBreaker