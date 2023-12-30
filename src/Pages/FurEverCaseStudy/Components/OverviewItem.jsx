function OverviewItem({title, content, icon_src}) {
  return (
    <div className="overview-item">
       <div className="icon">
            <img src={icon_src} alt="Person icon" />
       </div>

        <div className="content">
            <p className="label">{title}</p>
            <p className="paragraph">{content}</p>
        </div>
    </div>
  )
}

export default OverviewItem