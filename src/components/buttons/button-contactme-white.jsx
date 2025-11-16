import { Link } from 'react-router-dom'
import './buttonContactMe.css'

function ContactMeWhitebutton(){
    return(
        <div className="button-contactme-white">
            <Link to="/contact" className='contact-link'><h3>Contact Me</h3></Link>
        </div>
    )
}

export default ContactMeWhitebutton