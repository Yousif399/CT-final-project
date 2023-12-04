import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"

import Nav from 'react-bootstrap/Nav';
import MyNav from '../comp/myNav';
import Footer from './footer';




const ViewFavourite2 = () => {

    const { id } = useParams();
    // console.log(id)
    const [movieInfo, setMovieInfo] = useState({})
    const [showMore, setShowMore] = useState(false)
    const { release_date, genres, spoken_languages,
        budget, title, runtime,
        revenue, overview, popularity,
        poster_path, vote_average,name } = movieInfo


    const getMovieInfo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        // console.log('movieee', data)
        setMovieInfo(data)
    }


    const getImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }

    useEffect(() => {
        getMovieInfo(id)
        
    }, [])
    return (
        <>
            <MyNav />
            <div className='view-movie'>
                <Nav.Link href='/fav2'><button> <i class="fa-solid fa-caret-left"></i>  Back</button></Nav.Link>
                <h1>{title ? title : name }....</h1>
                <div className="details">
                    <div className="detail">
                        <div className="img-view-movie">
                            <img src={poster_path ? getImg(poster_path) : null}></img>
                        </div>
                        <div className="movie-det">
                            <div><p><span>Rating:</span><span>{vote_average}</span></p></div>
                            <div>  <p ><span>Popularity:</span><span>{popularity}</span></p></div>
                            <div><p><span>Release:</span><span>{release_date}</span></p></div>
                            <div> <p><span>Budget:</span><span>${budget}</span></p></div>
                            <div><p><span>Run Time:</span><span>{runtime}</span></p></div>
                            <div> <p><span>Revenue:</span><span>${revenue}</span></p></div>
                            <div className="lang-gen"> <span className="lang">Languages:</span><span>{spoken_languages?.map((l, index) => { return (<p className="gen-txt" key={index}>{l.english_name}</p>) })}</span></div>
                            <div className="lang-gen"><span className="genres">Genres:</span><span >{genres?.map((g, index) => { return (<p className="gen-txt" key={index} >{g.name}</p>) })}</span></div>
                        </div>
                    </div>
                    <div className="butons-shows">
                    <button id='view-btn' className='btn' >Remove from favorite</button>
                        
                    </div>
                    <div className="desc">
                        {showMore ? overview : overview?.substring(0, 250) + '....'}
                        <button className="custom-btn btn-1" onClick={() => { setShowMore(!showMore) }}>{showMore ? ' Less' : 'More'}</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default  ViewFavourite2
