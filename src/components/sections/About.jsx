import '../styles/About.css'

function About(){
    return(
        <div className='about'>
            <div className='description'>
                <h2>About Me</h2>
                <p>A photographer based in Iloilo City, Philippines with a fundamental focus on
                Cinematic imagery and aesthetics.</p>
            </div>
            <img src="/images/about-image.jpg" alt="portrait of peter" />
        </div>
    )
}

export default About