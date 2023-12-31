import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import MenuNavbar from './MenuNavbar'
import HeaderNavbar from './HeaderNavbar'

function Navbar() {
    const [menuExpanded, setMenuExpanded] = useState(false)
    let location = useLocation()

    const [prevScrollPos, setPrevScrollPos] = useState(100);

   useEffect( () => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        console.log(prevScrollPos)
        const currentScrollPos = window.scrollY
        const navbar = document.getElementById('primary-navbar')
    
        if (currentScrollPos > prevScrollPos){
            navbar.setAttribute('aria-hide', 'true')
        }
        
        else {
            navbar.setAttribute('aria-hide', 'false')
        }
        
        setPrevScrollPos(currentScrollPos)
    }


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
    <nav className='primary-navbar full-width' id='primary-navbar' data-expanded='false' aria-hide='false'>
        <div className='container'>
            <HeaderNavbar toggleMenu={toggleMenu} />

            <MenuNavbar closeMenu={closeMenu} />
        </div>
    </nav>
  )
}

export default Navbar