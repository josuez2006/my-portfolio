import SectionBreaker from "."

function TheProblem() {
  const title = 'The problem'
  const paragraph1 = 'A worldwide business deals with dogs. Or in other words, it rescues dogs that have been abused or harmed and finds them a better home.'
  const paragraph2 = 'Thousands of dogs are rescued every single day. It’s completely impossible to find enough suitable homes for all of them.'

  return (
    <SectionBreaker title={title} paragraph1={paragraph1} paragraph2={paragraph2}/>
  )
}

export default TheProblem