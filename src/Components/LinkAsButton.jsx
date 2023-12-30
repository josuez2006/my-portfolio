import { Link } from 'react-router-dom'

function LinkAsButton({to, children}) {
  return (
    <Link to={to}>
      <button className="btn">
        {children}
      </button>
    </Link>
  )
}

export default LinkAsButton