import { Link } from 'react-router-dom'

import '../styles/Nav.css'

function Nav(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li>Gallery</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav