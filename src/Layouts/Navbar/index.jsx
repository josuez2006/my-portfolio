import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import MenuNavbar from './MenuNavbar'
import HeaderNavbar from './HeaderNavbar'

function Navbar() {
    const [menuExpanded, setMenuExpanded] = useState(false)
    let location = useLocation()


    const closeMenu = () => {
        const navbar = document.getElementById('primary-navbar')

        if (menuExpanded) {
            navbar.setAttribute('data-expanded', 'false')
            setMenuExpanded(false)
        }
    }
    
    useEffect(() => {

        window.scrollTo(0, 0)
        closeMenu()

    }, [location])

    const toggleMenu = () => {
        const navbar = document.getElementById('primary-navbar')

        if (!menuExpanded) {
            navbar.setAttribute('data-expanded', 'true')
            setMenuExpanded(true)
        } 
        
        else {
            navbar.setAttribute('data-expanded', 'false')
            setMenuExpanded(false)
        }
    }

  return (
    <nav className='primary-navbar full-width' id='primary-navbar' data-expanded='false'>
        <div className='container'>
            <HeaderNavbar toggleMenu={toggleMenu} />

            <MenuNavbar closeMenu={closeMenu} />
        </div>
    </nav>
  )
}

export default Navbar