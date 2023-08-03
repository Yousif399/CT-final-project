import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import Footer from '../footer'





const CarouselApp = ({ actualData }) => {
    const [showMore, setShowMore] = useState(false)

    // console.log('hello',actualData)
    const { id, original_title, overview, vote_average, poster_path } = actualData
    // console.log(id)
    const getImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }


    return (
        <>
            <div id='slide' className="container">

                <div className="wrapper">
                    <div className="banner-img">
                        <figure>
                            <Nav.Link href={`/movies/${id}`}><img className='slide-img' src={getImg(poster_path)} alt={original_title} /></Nav.Link>
                        </figure>
                    </div>
                    <div className="slider-des">

                        <h1>{original_title}</h1>
                        <h3>{vote_average}/10  <img className='starts-img' src='https://cdn-icons-png.flaticon.com/512/227/227711.png' /></h3>
                    </div>
                    <div className="desc1">
                        {showMore ? overview : overview?.substring(0, 40) + '..'}

                        <button className="custom-btn btn-1" onClick={() => { setShowMore(!showMore) }}>{showMore ? ' Less' : 'More'}</button>
                    </div>

                </div>

            </div>




            
        </>
    )
}

export default CarouselApp