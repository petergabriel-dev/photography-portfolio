import '../styles/Hero.css'
import Button from '../buttons/Button.jsx'

function Hero(){
    return(
        <div className='hero'>
            <div className='hero-contents'>
                <h1>Fragments of Fleeting Memories</h1>
                <h2>by Peter Gabriel</h2>
                <p>A photography portfolio</p>
                <div className='hero-cta-buttons'>
                    <Button theme='dark' to='/'>Explore</Button>
                    <Button theme='light' to='/contact'>Contact</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero