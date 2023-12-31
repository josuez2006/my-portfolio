function TwoColumnContainer({ children }) {
    const [ left, right ] = children

  return (
    <div className="two-col-grid">
        {left}
        {right}
    </div>
  )
}

export default TwoColumnContainer