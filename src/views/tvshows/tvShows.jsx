import { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import '../css/tvshow.css'
import { Link } from 'react-router-dom';
import './tvshow.css'

const TvShows = () => {
    const [movie, setMovie] = useState([])


    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=e832cdb11d340463dee240ac72d617f1&language=en-US&page=1').then((response) => {
            setMovie(response.data.results)
            console.log(response.data.results)
        }).catch((err) => { console.log(err) })

    }, [])
    const getImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }


    return (
        <div id='tv-shows' className='container' >
            {movie && movie.length > 0 ? movie.map((m, index) => {
                return (
                    // to={`/anime/${a.mal_id}`}
                    <div className="container" key={index}>
                        <Card.Title> <h2 className='tv-shows-txt'>{m.name}</h2></Card.Title>
                        <Link to={`/tvshows/${m.id}`}><img className="tv-shows-img" variant="top" src={getImg(m.poster_path)} /></Link>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='box-txt'>Rating: {m.vote_average} <i className="fa-solid fa-star-half-stroke"></i></ListGroup.Item>
                            <ListGroup.Item className='box-txt'>popularity: {m.popularity} </ListGroup.Item>
                            <ListGroup.Item className='box-txt'>Date:  {m.first_air_date} </ListGroup.Item>
                        </ListGroup>
                    </div> 
                )
            }) : <h1>loading</h1>
            }
        </div>
    )
}

export default TvShows;