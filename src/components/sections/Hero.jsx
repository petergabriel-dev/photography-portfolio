import '../styles/Hero.css'
import ContactMeWhitebutton from '../buttons/button-contactme-white'
import ExploreBlackbutton from '../buttons/button-explore-black'

function Hero(){
    return(
        <div className='hero'>
            <div className='hero-contents'>
                <h1>Fragments of Fleeting Memories</h1>
                <h2>by Peter Gabriel</h2>
                <p>A photography portfolio</p>
                <div className='hero-cta-buttons'>
                    <ExploreBlackbutton/>
                    <ContactMeWhitebutton/>
                </div>
            </div>
        </div>
    )
}

export default Hero