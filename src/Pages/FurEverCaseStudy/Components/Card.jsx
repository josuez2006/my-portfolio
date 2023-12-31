function Card({label, title, paragraph}) {
  return (
    <div className="text-group">
      <div>
        <p className="label">{ label }</p>
        <h5 className="subtitle">{ title }</h5>
      </div>
      <p className="paragraph">{ paragraph }</p>
    </div>
  )
}

export default Card