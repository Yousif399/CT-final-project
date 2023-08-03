import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import Nav from 'react-bootstrap/Nav';
import MyNav from '../comp/myNav';
import Footer from './footer';


const ViewFavourite1 = () => {
  const { id } = useParams();
  console.log(id)
  const [anime, setAnime] = useState({})
  const [showMore, setShowMore] = useState(false)
  const { title, synopsis, trailer,
    duration, aired, season, images,
    rank, score, scored_by, popularity,
    status, rating, source } = anime


  const getMovieInfo = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await response.json()
    console.log('movieee', data)
    setAnime(data.data)
  }




  useEffect(() => {
    getMovieInfo(id)

  }, [])
  return (
    <>
      <MyNav />
      <div className='view-anime'>
        <Nav.Link href='/fav'><button> <i class="fa-solid fa-caret-left"></i>  Back</button></Nav.Link>

        <h1>{title}</h1>
        <div className="details">
          <div className="detail">
            <div className="img-view-anime">
              <img src={images?.jpg.large_image_url}></img>
            </div>
            <div className="anime-det">
              <p ><span>Popularity:</span><span>{popularity}</span></p>
              <p><span>Rating:</span><span>{rating}</span></p>
              <p><span>Rank:</span><span>{rank}</span></p>
              <p><span>Score:</span><span>{score} </span></p>
              <p><span>Scored By:</span><span>{scored_by}</span></p>
              <p><span>Status:</span><span>{status}</span></p>
              <p><span>Source:</span><span>{source}</span></p>
              <p><span>Season:</span><span>{season}</span></p>
              <p><span>Duration:</span><span>{duration}</span></p>
              <p ><span>Release Date:</span><span>{aired?.string}</span></p>
            </div>
          </div>
          <div className="butons">
            <button id='view-btn' className='btn'  >Remove from favorite</button>
          </div>
          <p className="desc">
            {showMore ? synopsis : synopsis?.substring(0, 250) + '..'}
            <button className="custom-btn btn-1" onClick={() => { setShowMore(!showMore) }}>{showMore ? ' Less' : 'More'}</button>
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ViewFavourite1