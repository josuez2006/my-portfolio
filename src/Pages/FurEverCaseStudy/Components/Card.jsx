function Card({label, title, paragraph}) {
  return (
    <div>
      <p className="label">{ label }</p>
      <h5 className="subtitle">{ title }</h5>
      <p className="paragraph">{ paragraph }</p>
    </div>
  )
}

export default Card