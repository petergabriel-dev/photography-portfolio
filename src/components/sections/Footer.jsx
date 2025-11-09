import { useState } from "react"
import '../styles/Footer.css'

function Footer(){

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
        <footer>
            <div>
                <h3>Contact Me</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Threads</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            <div>
                <h2>Email Me</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            required
                        />
                            
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
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
        </footer>
    )
}

export default Footer