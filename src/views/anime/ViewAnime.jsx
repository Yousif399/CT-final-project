import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './viewAnime.css'


const ViewAnime = () => {
    const { id } = useParams()
    console.log(id)
    const [anime, setAnime] = useState({})
    const [char, setChar] = useState([])
    const [showMore, setShowMore] = useState(false)

    const { title, synopsis, trailer,
        duration, aired, season, images,
        rank, score, scored_by, popularity,
        status, rating, source } = anime

        console.log('hello',trailer)

    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        // console.log(response)
        const data = await response.json()
        console.log('dataaaaaa',data.data)
        setAnime(data.data)

    }
    const getChar = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters
        `)
        const data = await response.json()
        console.log(data.data)
        setChar(data.data)
    }



    useEffect(() => {
        getAnime(id)
        getChar(id)
    }, [])

    return (
        <>
            <div className='view-anime'>
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
                            <p><span>Score:</span><span>{score}</span></p>
                            <p><span>Scored By:</span><span>{scored_by}</span></p>
                            <p><span>Status:</span><span>{status}</span></p>
                            <p><span>Source:</span><span>{source}</span></p>
                            <p><span>Season:</span><span>{season}</span></p>
                            <p><span>Duration:</span><span>{duration}</span></p>
                            <p ><span>Release Date:</span><span>{aired?.string}</span></p>

                        </div>
                    </div>
                    <p className="desc">
                        {showMore ? synopsis : synopsis?.substring(0, 250) + '....'}
                        <button onClick={() => { setShowMore(!showMore) }}>{showMore ? 'Show Less' : 'More..'}</button>
                    </p>
                </div>
            </div>
            <div className="view-anime">
                <h1 className="trailer">Trailer: </h1>
                <div className="trailer-con">
                    {trailer?.embed_url && <iframe src={trailer?.embed_url}
                        title='inline Frame Example'
                        width='800'
                        height='400'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen>
                    </iframe>
                    }
                    {console.log(trailer)}
                </div>
                {console.log(char)}
                <h1 className="title-char">Charecters: </h1>
                <div className="chars">
                    {char ?.map((c,index) => {
                        const { role } = c
                        const { images, name } = c.character
                        return (
                            <>
                                <div className='view-chars' key={index}>
                                    <img src={images?.jpg.image_url} alt=''></img>
                                    <h3>{name}</h3>
                                    <h5> {role} </h5>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )



}


export default ViewAnime