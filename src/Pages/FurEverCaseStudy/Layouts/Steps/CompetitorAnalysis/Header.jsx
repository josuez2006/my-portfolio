import TwoColumnContainer from "../../../TwoColumnContainer"

function Header() {
  return (
    <TwoColumnContainer>

      <div className="text-group">
        <h4 className="title">Competitor analysis</h4>
        <p className="paragraph">The competitors have made a lot of mistakes that we can learn to build a better app. I chose two of them for these purposes: Adopt Me and Pet Whatever.</p>
      </div>

      <div className="competitor-analysis__images">
        <img src="./assets/images/Fur-Ever/competitor analysis/1.jpg" alt="" />
        <img src="./assets/images/Fur-Ever/competitor analysis/2.jpg" alt="" />
      </div>

    </TwoColumnContainer>
  )
}

export default Header