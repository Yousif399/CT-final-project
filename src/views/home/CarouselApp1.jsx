import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../footer'

const CarouselApp1 = ({actualData}) => {
    const [showMore, setShowMore] = useState(false)


    // console.log('hello',actualData)
    const { id, original_name, overview, vote_average, poster_path } = actualData
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
                         <Nav.Link href={`/tvshows/${id}`}>   <img className='slide-img' src={getImg(poster_path)} alt={original_name} /></Nav.Link>
                        </figure>
                    </div>
                    <div className="slider-des">

                        <h1>{original_name}</h1>
                        <h3>{vote_average}/10  <img className='starts-img' src='https://cdn-icons-png.flaticon.com/512/227/227711.png' /></h3>
                    </div>
                    <div className="desc1">
                        {showMore ? overview : overview?.substring(0, 40) + '....'}
                        <button className="custom-btn btn-1" onClick={() => { setShowMore(!showMore) }}>{showMore ? ' Less' : 'More'}</button>
                    </div>

                </div>
            </div>
            
        </>
    )
}


export default CarouselApp1