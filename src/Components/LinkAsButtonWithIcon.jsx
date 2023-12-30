function LinkAsButtonWithIcon({to, children}) {
  return (
    <Link to={to}>
      <button className="btn btn-with-icon">
        {children}
      </button>
    </Link>
  )
}

export default LinkAsButtonWithIcon