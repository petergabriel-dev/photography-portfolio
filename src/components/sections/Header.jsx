import { useState, useEffect } from 'react'
import '../styles/Header.css'
import Nav from "../buttons/Nav"

function Header() {
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            console.log('Scroll position:', window.scrollY, 'Viewport height:', window.innerHeight)
            if (window.scrollY > window.innerHeight) {
                setIsHidden(true)
            } else {
                setIsHidden(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    return (
        <header className={`header ${isHidden ? 'hidden' : ''}`}>
            <h1>My Photography Portfolio</h1>
            <Nav />
        </header>
    )
}

export default Header