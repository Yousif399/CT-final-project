import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './viewTvShows.css'
import MyNav from '../../comp/myNav'
import Nav from 'react-bootstrap/Nav';
import Footer from '../footer';
import axios from 'axios';





const ViewTvShow = () => {
    const { id } = useParams()
    // console.log(id)
    const [tvShow, setTvShow] = useState({})
    const [tvShowInfo, setTvShowInfo] = useState({})
    const [char, setChar] = useState([])
    const [showMore, setShowMore] = useState(false)
    const [watch, setWatch] = useState()
    const [review, setReview] = useState()



    const { first_air_date, genres, spoken_languages,
        last_air_date, name, number_of_episodes,
        number_of_seasons, overview, popularity,
        poster_path, vote_average } = tvShowInfo


    const getTvInfo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        console.log('ddd', data)
        setTvShowInfo(data)
    }

    const getTrailer = async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=e832cdb11d340463dee240ac72d617f1`)
        // console.log(response)
        const data = await response.json()
        // console.log('dattta', data.results)
        setTvShow(data.results)
      
    }

    const getChar = async (tvId) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        // console.log(data.cast)
        setChar(data.cast)

    }

    const getVideo = (key) => {
        return `https://www.youtube.com/embed/${key}?enablejsapi=1&wmode=opaque&autoplay=1`

    }
    const getImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }
    const getCharImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }
    const whereToWatch = async (key) =>{
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        setWatch(data.results.TW.link)
        // console.log(data.results)
    }
    const readReview = async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        setReview(data.results)
        // console.log(data)
    }

    useEffect(() => {
        getTrailer(id),
        getTvInfo(),
        getChar(id),
        whereToWatch(id)
        readReview(id)

    }, [])
    const addFav = () =>{
        const item = [id,poster_path]
        console.log(item)
        axios.post('https://watch-it-bakend.onrender.com/api/favourite',JSON.stringify(item),{
            headers : {'Content-Type' : 'application/json'}
        }).then(function (response){
            console.log(response)
        }).catch(function (error){
            console.log(error)
        })
    }
    return (
        <>
            <MyNav />
            <div className='view-tv'>
                <Nav.Link href='/tvshows'><button> <i class="fa-solid fa-caret-left"></i>  Back</button></Nav.Link>
                <h1>{name}</h1>
                
                <div className="details">
                    <div className="detail">
                        <div className="img-view-tv">
                            <img src={poster_path ? getImg(poster_path) : null}></img>
                        </div>
                        <div className="tv-det">
                            <p><span>Rating:</span><span>{vote_average}</span></p>
                            <p ><span>Popularity:</span><span>{popularity}</span></p>
                            <p><span>Release:</span><span>{first_air_date}</span></p>
                            <p><span>End:</span><span>{last_air_date}</span></p>
                            <p><span>Episodes:</span><span>{number_of_episodes}</span></p>
                            <p><span>Seasons:</span><span>{number_of_seasons}</span></p>
                            <div className='lan'><span className="lang-tv">Languages:</span><span>{spoken_languages?.map((l, index) => { return (<div className='gen-txt-tv' key={index} >{l.english_name}</div>) })}</span></div>
                            <div className='gen' ><span className='genres-tv'>Genres:</span><span>{genres?.map((g, index) => { return (<div className='gen-txt-tv' key={index} >{g.name}</div>) })}</span></div>
                        </div>
                    </div>
                    <div className="butons-shows ">
                      {watch && watch.length >0 ?<button id='view-btn' className='btn' ><a href={watch} target='_black' >Watch now </a></button>:null} 
                        <button id='view-btn' className='btn'onClick={addFav} >Add to favorite</button>
                        {review && review.length >0 ?<button id='view-btn' className='btn' ><a href={review[0].url} target="_blank">Read Reviews</a></button>:null }
                    </div>
                    <p className="desc">
                        {showMore ? overview : overview?.substring(0, 250) + '....'}
                        <button className="custom-btn btn-1" onClick={() => { setShowMore(!showMore) }}>{showMore ? ' Less' : 'More'}</button>
                    </p>
                </div>
            </div>
            <div className="view-tv">
                <h1 className="trailer">Trailer: </h1>
                <div className="trailer-con">
                    {tvShow && tvShow.length > 0 ? <iframe src={getVideo(tvShow[0].key)}
                        title='inline Frame Example'
                        width='800'
                        height='400'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen>
                    </iframe>
                        : <div className='trailer-con'>Trailer is not avilable</div>}
                </div>
                <h1 className="title-char">Charecters: </h1>
                <div className="chars">
                    {char?.map((c, index) => {
                        // console.log(c)
                        const { character } = c
                        const { original_name } = c
                        const { profile_path } = c
                        return (
                            <>
                                <div className='view-chars' key={index}>
                                    <img src={getCharImg(profile_path)} alt=''></img>
                                    <h3>{character}</h3>
                                    <h5> {original_name} </h5>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ViewTvShow

