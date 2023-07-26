import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './viewTvShows.css'


const ViewTvShow = () => {
    const { id } = useParams()
    // console.log(id)
    const [tvShow, setTvShow] = useState([])
    const [tvShowInfo, setTvShowInfo] = useState({})
    const [char, setChar] = useState([])
    const [showMore, setShowMore] = useState(false)





    const { first_air_date, genres, languages,
        last_air_date, name, number_of_episodes,
        number_of_seasons, overview, popularity,
        poster_path, vote_average } = tvShowInfo


    const getTvInfo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        // console.log('ddd', data)
        setTvShowInfo(data)
    }

    const getTrailer = async (tvShow) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${tvShow}/videos?api_key=e832cdb11d340463dee240ac72d617f1`)
        // console.log(response)
        const data = await response.json()
        console.log('dattta', data.results[0])
        setTvShow(data.results)
        // if (data.results.length == 0) {
        //     setTvShow(null)
        // } else {
        //     setTvShow(data.results[0])
        // }
    }

    const getChar = async (tvId) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        // console.log(data.cast)
        setChar(data.cast)

    }

    const getVideo = (key) => {
        return `https://www.youtube.com/embed/${key}?enablejsapi=1&wmode=opaque&autoplay=1`
        // try {
        //     let link = null
        //     if (key) {
        //         link =  `https://www.youtube.com/embed/${key}?enablejsapi=1&wmode=opaque&autoplay=1`
        //     }
        //     return link
        // } catch (error) {
        //     console.log (error)
        // }
    }
    const getImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }
    const getCharImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }

    useEffect(() => {
        getTrailer(id)
        getTvInfo()
        getChar(id)

    }, [])
    return (
        <>
            <div className='view-tv'>
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
                            <p><span>Languages:</span><span>{`${languages}`}</span></p>

                        </div>
                    </div>
                    <p className="desc">
                        {showMore ? overview : overview?.substring(0, 250) + '....'}
                        <button onClick={() => { setShowMore(!showMore) }}>{showMore ? 'Show Less' : 'More..'}</button>
                    </p>
                </div>
            </div>


            <div className="view-tv">
                <h1 className="trailer">Trailer: </h1>
                <div className="trailer-con">
                    {tvShow?.map((t) => {
                        
                        const { key } = tvShow
                        {if (t.key === ''){
                            console.log(t.key)
                        }else{
                            console.log('nooooooo videooooo')
                        }}
                        return (
                            <>
                                <iframe src={getVideo(t.key)}
                                    title='inline Frame Example'
                                    width='800'
                                    height='400'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen>
                                </iframe>
                                : <div className='trailer-con'>Trailer is not avilable</div>
                            </>

                        )
                    })
                    }
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
        </>
    )
}

export default ViewTvShow

