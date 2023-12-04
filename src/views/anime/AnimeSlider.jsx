import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import Footer from '../footer'

const AnimeSlider = ({ actualData }) => {
    // const [showMore, setShowMore] = useState(false)

    // console.log('hello', actualData)
    const { mal_id, title, status, score, images } = actualData
    // console.log(images)
    return (
        <>
            <div id='slide' className="container">
                <div className="wrapper">
                    <div className="slider-des">

                        <h1>{title}</h1>
                    </div>
                    <div className="banner-img">
                        <figure>
                            <Nav.Link href={`/anime/${mal_id}`}><img className='slide-img' src={images.jpg.image_url} alt={title} /></Nav.Link>
                        </figure>
                    </div>
                    <div className="slider-des">
                        <h3>{score}/10  <img className='starts-img' src='https://cdn-icons-png.flaticon.com/512/227/227711.png' /></h3>
                        <h3>{status}</h3>
                    </div>


                </div>
            </div>
            
        </>

    )
}

export default AnimeSlider