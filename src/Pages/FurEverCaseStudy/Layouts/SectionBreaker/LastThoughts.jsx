import SectionBreaker from '.'

function LastThoughts() {
  const title = 'Last thoughts'
  const paragraph1 = 'Finally, the design is finished for development. However, as in any design, there are still improvements that can be made.'
  const paragraph2 = 'With further research, for example, we could find out that more filters are required or that’s better to have a inner chat. The design process never ends. '

  return (
    <SectionBreaker title={title} paragraph1={paragraph1} paragraph2={paragraph2}/>
  )
}

export default LastThoughts