import { useNavigate } from 'react-router-dom'
import '../styles/buttonContactMe.css'

function ContactMeWhitebutton(){
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/contact')
    }

    return(
        <div className="button-contactme-white" onClick={handleClick}>
            <h3>Contact Me</h3>
        </div>
    )

}

export default ContactMeWhitebutton