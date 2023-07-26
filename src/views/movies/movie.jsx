import { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import '../css/movies.css'
import './movies.css'


const Movie = () => {
    const [movie, setMovie] = useState([])


    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e832cdb11d340463dee240ac72d617f1&language=en-US&page=1').then((response) => {
            setMovie(response.data.results)
            // console.log(response.data.results)
        }).catch((err) => { console.log(err) })

    }, [])
    const getImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }

    const getTrailer = (movieId) => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e832cdb11d340463dee240ac72d617f1`).then((res) => {
            // setVideo(res.data.results)

            const key = (res.data.results[0].key)
            console.log(key)
        }).catch((err) => { console.log(err) })

    }



    return (
        <div id='movies' className='container' >
            {movie && movie.length > 0 ? movie.map((m, index) => {
                return (
                    <div className="container" key={index}>
                        <Card.Title> <h2 className='movies-txt'>{m.title}</h2></Card.Title>
                        <Link to={`/movies/${m.id}`}><img className="movies-imgs" variant="top" src={getImg(m.poster_path)} /></Link>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='box-txt'>Rating: {m.vote_average} <i className="fa-solid fa-star-half-stroke"></i></ListGroup.Item>
                            <ListGroup.Item className='box-txt'>popularity: {m.popularity} </ListGroup.Item>
                            <ListGroup.Item className='box-txt'>Date: {m.release_date} </ListGroup.Item>
                        </ListGroup>
                    </div>
                )

            }) : <h1>loading</h1>
            }
        </div >
    )
}
export default Movie