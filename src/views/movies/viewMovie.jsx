import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './viewMovie.css'

const ViewMovies = () => {
    const { id } = useParams()
    // console.log(id)
    const [movie, setMovie] = useState([])
    const [movieInfo, setMovieInfo] = useState({})
    const [char, setChar] = useState([])
    const [showMore, setShowMore] = useState(false)



    const { release_date, genres, spoken_languages
        ,
        budget, title, runtime,
        revenue, overview, popularity,
        poster_path, vote_average } = movieInfo


    const getMovieInfo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        console.log('movieee', data)
        setMovieInfo(data)
    }

    const getImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }



    useEffect(() => {
        getMovieInfo()
    }, [])





    return (
        <>
            <div className='view-movie'>
                <h1>{title}</h1>
                <div className="details">
                    <div className="detail">
                        <div className="img-view-movie">
                            <img src={poster_path ? getImg(poster_path) : null}></img>
                        </div>
                        <div className="movie-det">
                            <p><span>Rating:</span><span>{vote_average}</span></p>
                            <p ><span>Popularity:</span><span>{popularity}</span></p>
                            <p><span>Release:</span><span>{release_date}</span></p>
                            <p><span>Budget:</span><span>${budget}</span></p>
                            <p><span>Run Time:</span><span>{runtime}</span></p>
                            <p><span>Revenue:</span><span>${revenue}</span></p>
                            <p><span>Languages:</span><span>{`${spoken_languages}`}</span></p>

                        </div>
                    </div>
                    <p className="desc">
                        {showMore ? overview : overview?.substring(0, 250) + '....'}
                        <button onClick={() => { setShowMore(!showMore) }}>{showMore ? 'Show Less' : 'More..'}</button>
                    </p>
                </div>
            </div>


            {/* <div className="view-movie">
                <h1 className="trailer">Trailer: </h1>
                <div className="trailer-con">
                    {tvShow?.map((t) => {

                        const { key } = tvShow
                        {
                            if (t.key === '') {
                                console.log(t.key)
                            } else {
                                console.log('nooooooo videooooo')
                            }
                        }
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
            </div> */}
        </>



    )

}

export default ViewMovies