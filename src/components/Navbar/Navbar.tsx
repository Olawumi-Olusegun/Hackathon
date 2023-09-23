import  { useEffect, useState } from 'react'

import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [color, setColor] = useState(false);


    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const changeNavBackground = () => {
        if(window !== undefined && window.scrollY >= 1) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBackground);
        return () => window.removeEventListener('scroll', changeNavBackground);
    }, [])


    return (
        <header className={color ? "header header-bg" : "header"}>
            <nav className='navbar'>
                    <Link to='/' className="logo">
                        <span>get</span>
                        <span className='pink-color'>linked</span>
                    </Link>
                    <div className={`hamburger__wrapper ${click ? "active" : "" }`} onClick={handleClick}>
                        <div className='hamburger__icon' >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <Link to="/" className='nav-item' onClick={closeMenu}>
                        <span>Timeline</span>
                    </Link>
                    <Link to="/" className='nav-item' onClick={closeMenu}>
                        <span onClick={closeMenu}>Overview</span>
                    </Link>
                    <Link to="/" className='nav-item' onClick={closeMenu}>
                        <span>FAQs</span>
                    </Link>
                    <Link to="/contact" className='nav-item' onClick={closeMenu}>
                        <span onClick={closeMenu}>Contact</span>
                    </Link>
                    <Link to="/register" className='nav-item btn nav-btn' onClick={closeMenu}>
                        <span onClick={closeMenu}>Register</span>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar