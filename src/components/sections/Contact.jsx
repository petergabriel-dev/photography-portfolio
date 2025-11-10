import { useState } from "react"
import '../styles/Contact.css'

function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Form Submitted:', { email, email, message })

        alert('Message has beent sent! (This is just a demo btw.)')

        setName('')
        setEmail('')
        setMessage('')
    }

    return(
        <div className='contact'>
            <h2>Contact Me</h2>
            <div className="contact-form">
                <form onSubmit={handleSubmit} className="form">

                    <div>
                        <input 
                            className="name"
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            required
                        />
                    </div>

                    <div>
                        <input 
                            className="email"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div>
                        <input 
                            type="message"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your inquiry here"
                            required
                        />
                    </div>

                    <button type="submit">Send Message</button>

                </form>
            </div>
        </div>
    )
}

export default Contact