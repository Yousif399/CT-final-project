import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MyNav from "../../comp/myNav";
import Nav from 'react-bootstrap/Nav';
import './viewHome.css'
import Footer from "../footer";
// VIEW MOVIESS
const ViewHome = () => {
    const { id } = useParams();
    console.log(id)


    const [search, setSearch] = useState({});
    const [trailer, setTrailer] = useState({})
    const [searchItem, setSearchItem] = useState({})
    const [char, setChar] = useState([])
    const [showMore, setShowMore] = useState(false)

    const { release_date, genres, spoken_languages,
        budget, title, runtime,
        revenue, overview, popularity,
        poster_path, vote_average,name } = searchItem

    const getItemInfo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        // console.log(data)
        setSearchItem(data)
    }
    const getImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }


    const getTrailer = async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        console.log(data)
        setTrailer(data.results)

    }

    const getVideo = (key) => {
        return `https://www.youtube.com/embed/${key}?enablejsapi=1&wmode=opaque&autoplay=1`
    }

    const getChar = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        console.log(data)
        setChar(data.cast)
    }

    const getCharImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }

    useEffect(() => {
        getItemInfo(id)
        getTrailer(id)
        getChar(id)
    }, [])



    return (
        <>
            <MyNav />
            <div className='view-movie'>
                <Nav.Link href='/'><button className='btn btn-dark' variant="outline-dark" >Go Back</button></Nav.Link>
                <h1>{title}...</h1>
                <div className="details">
                    <div className="detail">
                        <div className="img-view-movie">
                            <img src={poster_path ? getImg(poster_path) : null}></img>
                        </div>
                        <div className="movie-det">
                            <div><p><span>Rating:</span><span>{vote_average}</span></p></div>
                            <div>  <p><span>Popularity:</span><span>{popularity}</span></p></div>
                            <div><p><span>Release:</span><span>{release_date}</span></p></div>
                            <div> <p><span>Budget:</span><span>${budget}</span></p></div>
                            <div><p><span>Run Time:</span><span>{runtime}</span></p></div>
                            <div> <p><span>Revenue:</span><span>${revenue}</span></p></div>
                            <div className="lan"> <span className="lang">Languages:</span><span>{spoken_languages?.map((l, index) => { return (<p className="gen-txt" key={index}>{l.english_name}</p>) })}</span></div>
                            <div className="gen"><span className="genres">Genres:</span><span >{genres?.map((g, index) => { return (<p className="gen-txt" key={index} >{g.name}</p>) })}</span></div>
                        </div>
                    </div>
                    <div className="desc">
                        {showMore ? overview : overview?.substring(0, 250) + '....'}
                        <button onClick={() => { setShowMore(!showMore) }}>{showMore ? 'Show Less' : 'More..'}</button>
                    </div>
                </div>
            </div>
            <div className="view-movie">
                <h1 className="trailer">Trailer: </h1>
                <div className="trailer-con">


                    {trailer && trailer.length > 0 ? <iframe src={getVideo(trailer[0].key)}
                        title='inline Frame Example'
                        width='800'
                        height='400'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen>
                    </iframe> : null}
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

export default ViewHome



