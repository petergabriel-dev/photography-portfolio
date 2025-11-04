import '../styles/Gallery.css'

function Gallery(){
    return(
        <div className='showcase'>
            <h2>Snapshots of Reality</h2>
            <div className='gallery'>
                <img src="/images/image 1.jpg" alt="description" />
                <img src="/images/image 2.jpg" alt="description" />
                <img src="/images/image 3.jpg" alt="description" />
            </div>
        </div>
    )
}

export default Gallery