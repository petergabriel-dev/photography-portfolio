import Hero from "../sections/Hero"
import Gallery from "../sections/Gallery"
import About from "../sections/About"
import Contact from "../sections/Contact"

function HomePage(){
    return(
        <div>
            <Hero/>
            <Gallery/>
            <About/>
            <Contact/>
        </div>
    )
}

export default HomePage