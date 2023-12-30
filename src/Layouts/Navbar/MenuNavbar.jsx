import { Link } from 'react-router-dom'

function MenuNavbar({closeMenu}) {
  return (
    <ul className='primary-navbar__menu' id='primary-navbar__menu'>
        <li>
            <Link className='primary-navbar__item primary-navbar__item--active' to='/'>Home</Link>
        </li>
        <li>
            <Link className='primary-navbar__item' id='about-link' to='/about'>About</Link>
        </li>
        <li>
            <Link className='primary-navbar__item' id='work-link' to='/work'>Work</Link>
        </li>
        <li onClick={closeMenu}>
            <a className='primary-navbar__item' id='contact-link' href='#contact'>Contact</a>
        </li>
    </ul>
  )
}

export default MenuNavbar