import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='row-flow-space-between | header header-expanded'>
        <img className="header__logo" src="./assets/Logo.svg" alt="Logo" />


        <nav>
            <button aria-controls='header-menu' className="header-menu-btn">
                <img src="./assets/icons/Menu.svg" alt="" />
            </button>

            <ul className='row-flow-64 header-menu' id='header-menu' data-expanded='false' >
                <li>
                    <Link className='header-menu__item header-menu__item--active'>Home</Link>
                </li>
                <li>
                    <Link className='header-menu__item'>About</Link>
                </li>
                <li>
                    <Link className='header-menu__item'>Work</Link>
                </li>
                <li>
                    <Link className='header-menu__item'>Contact</Link>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Navbar