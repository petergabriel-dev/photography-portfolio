import './Button.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Button({ children, theme, to }) {
    const buttonClass = `btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`

    return(
            <Link to={to} className={buttonClass}>
                <h3>{children}</h3>
            </Link>
    )
}

export default Button