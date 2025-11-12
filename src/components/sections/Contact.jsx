import '../styles/Contact.css'

import ContactMeBlackbutton from "../buttons/button-contactme-black"

function Contact(){

    return(
        <div className='contact'>
            <h2>Let's Build Something!</h2>
            <p>Have a project proposal or an idea brewing up?</p>
            <ContactMeBlackbutton />
        </div>
    )
}

export default Contact