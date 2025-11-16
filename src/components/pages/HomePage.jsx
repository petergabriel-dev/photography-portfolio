import Hero from "../sections/Hero"
import Header from "../sections/Header"
import Gallery from "../sections/Gallery"
import About from "../sections/About"

function HomePage(){
    return(
        <div>
            <Hero/>
            <Gallery/>
            <About/>
        </div>
    )
}

export default HomePage