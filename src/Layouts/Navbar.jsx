import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ ref }) {
    const [menuExpanded, setMenuExpanded] = useState('false')

    const handleLinkCliked = () => {
        const navbar = document.getElementById('primary-navbar')

        if (menuExpanded == 'true') {
            navbar.setAttribute('data-expanded', 'false')
            setMenuExpanded('false')
        }

        ref.current.scrollIntoView({behavior: "smooth", block: "end"})           

    }
    
    const handleMenuClicked = () => {
        const navbar = document.getElementById('primary-navbar')

        if (menuExpanded == 'false') {
            navbar.setAttribute('data-expanded', 'true')
            setMenuExpanded('true')
        } 
        
        else {
            navbar.setAttribute('data-expanded', 'false')
            setMenuExpanded('false')
        }
    }

  return (
    <nav className='primary-navbar full-width' id='primary-navbar' data-expanded='false'>
        <div className='container'>
            <div className='row-flow-space-between | primary-navbar__header'>
                <svg className="primary-navbar__logo" width="55" height="36" viewBox="0 0 55 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16.5909 0.0909081H20.8182V25.0455C20.8182 27.2727 20.4091 29.1648 19.5909 30.7216C18.7727 32.2784 17.6193 33.4602 16.1307 34.267C14.642 35.0739 12.8864 35.4773 10.8636 35.4773C8.95455 35.4773 7.25568 35.1307 5.76705 34.4375C4.27841 33.733 3.10795 32.733 2.25568 31.4375C1.40341 30.142 0.977273 28.6023 0.977273 26.8182H5.13636C5.13636 27.8068 5.38068 28.6705 5.86932 29.4091C6.36932 30.1364 7.05114 30.7045 7.91477 31.1136C8.77841 31.5227 9.76136 31.7273 10.8636 31.7273C12.0795 31.7273 13.1136 31.4716 13.9659 30.9602C14.8182 30.4489 15.4659 29.6989 15.9091 28.7102C16.3636 27.7102 16.5909 26.4886 16.5909 25.0455V0.0909081ZM30.0507 35V31.9318L48.8689 3.84091H29.8461V0.0909081H53.9143V3.15909L35.0961 31.25H54.1189V35H30.0507Z" fill="#051923"/>
                </svg>

                <button aria-controls='primary-navbar__menu' className="primary-navbar__btn" onClick={handleMenuClicked}>
                    <svg class="icon" viewBox="0 0 100 100" width="35">
                        <rect class="line" id="top" width="80" height="10" x="10" y="20" rx="8"></rect>
                        <rect class="line" id="middle" width="80" height="10" x="10" y="45" rx="8"></rect>
                        <rect class="line" id="bottom" width="80" height="10" x="10" y="70"rx="8"></rect>
                    </svg>
                </button>
            </div>

            <ul className='primary-navbar__menu' id='primary-navbar__menu'>
                <li onClick={handleLinkCliked}>
                    <Link className='primary-navbar__item primary-navbar__item--active' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='primary-navbar__item' id='about-link' to='/about'>About</Link>
                </li>
                <li>
                    <Link className='primary-navbar__item' id='work-link' to='/work'>Work</Link>
                </li>
                <li onClick={handleLinkCliked}>
                    <a className='primary-navbar__item' id='contact-link' href='#contact'>Contact</a>
                </li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar