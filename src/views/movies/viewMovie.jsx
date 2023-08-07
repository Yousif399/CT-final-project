import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './viewMovie.css'
import MyNav from "../../comp/myNav";
import Nav from 'react-bootstrap/Nav';
import Footer from "../footer";
import axios from "axios";


const ViewMovies = () => {

    const { id } = useParams();
    // console.log(id)
    const [movie, setMovie] = useState({})
    const [movieInfo, setMovieInfo] = useState({})
    const [char, setChar] = useState([])
    const [showMore, setShowMore] = useState(false)
    const [watch, setWatch] = useState()
    const [review, setReview] = useState()



    const { release_date, genres, spoken_languages,
        budget, title, runtime,
        revenue, overview, popularity,
        poster_path, vote_average } = movieInfo


    const getMovieInfo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        // console.log('movieee', data)
        setMovieInfo(data)
    }


    const getImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }

    const getTrailer = async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        console.log(data.results[0].key)
        setMovie(data.results)
    }

    // console.log(movie)


    const getVideo = (x) => {
        return `https://www.youtube.com/embed/${x}?enablejsapi=1&wmode=opaque&autoplay=1`
    }

    const getChar = async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        // console.log(data.cast)
        setChar(data.cast)
    }
    const getCharImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }
    const whereToWatch = async (key) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        setWatch(data.results.US.link)

        // console.log(data.results)
    }
    const readReview = async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        setReview(data.results)
        console.log(data)
    }

    useEffect(() => {
        getMovieInfo(id)
        getTrailer(id)
        getChar(id)
        whereToWatch(id)
        readReview(id)
    }, [])
    const addFav = () =>{
        const item = [id,poster_path]
        console.log(item)
        axios.post('https://watch-it-bakend.onrender.com/api/favourite/movie',JSON.stringify(item),{
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
            <div className='view-movie'>
                <Nav.Link href='/movie'><button> <i class="fa-solid fa-caret-left"></i>  Back</button></Nav.Link>
                <h1>{title}...</h1>
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
                       <button id='view-btn' className='btn' > <a href={watch} target="_blank"> Watch now</a></button>
                        <button id='view-btn' className='btn'onClick={addFav} >Add to favorite</button>
                        {review && review.length >0 ?<button id='view-btn' className='btn' ><a href={review[0].url} target="_blank">Read Reviews</a></button>:null }
                        
                    </div>
                    <div className="desc">
                        {showMore ? overview : overview?.substring(0, 250) + '....'}
                        <button className="custom-btn btn-1" onClick={() => { setShowMore(!showMore) }}>{showMore ? ' Less' : 'More'}</button>
                    </div>
                </div>
            </div>

            <div className="view-movie">
                <h1 className="trailer">Trailer: </h1>
                <div className="trailer-con">

                    {movie && movie.length > 0 ? <iframe src={getVideo(movie[0].key)}
                        title='inline Frame Example'
                        width='800'
                        height='400'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen>
                    </iframe> : <div className='trailer-con'>Trailer is not avilable</div>}
                </div>
                <h1 className="title-char">Charecters: </h1>
                <div className="chars">
                    {char?.map((c, index) => {
                        // console.log(c)
                        const { character } = c
                        const { original_name } = c
                        const { profile_path } = c
                        return (

                            <div className='view-chars' key={index}>
                                <img src={getCharImg(profile_path)} alt=''></img>
                                <h3>{character}</h3>
                                <h5> {original_name} </h5>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>



    )

}

export default ViewMovies