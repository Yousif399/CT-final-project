import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
// import '../css/movies.css'
import './movies.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Footer from '../footer';
import Pagination from '../Pagination';
import { DataContext } from '../../context/DataProvider';


const Movie = () => {
    const [movie, setMovie] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const { cart, setCart } = useContext(DataContext)


    const SerachTv = async (e) => {
        e.preventDefault();
        console.log('Searchingggg')
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${searchItem}&api_key=e832cdb11d340463dee240ac72d617f1`)
            const data = await response.json()
            console.log(data)
            setMovie(data.results)
        }
        catch (e) {
            console.log(e)
        }
    }

    const changeHandler = (e) => {
        setSearchItem(e.target.value)
    }


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=e832cdb11d340463dee240ac72d617f1&language=en-US`).then((response) => {
            setMovie(response.data.results)
            // console.log(response.data.results)
        }).catch((err) => { console.log(err) })

    }, [])
    const getImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }

    const popularMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e832cdb11d340463dee240ac72d617f1&page=${currentPage}`)
        const data = await response.json()
        setMovie(data.results)
    }

    const upComingMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        setMovie(data.results)

    }

    const trendingMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        setMovie(data.results)
    }
    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currentPosts = movie.slice(firstPost, lastPost);
    console.log(currentPage)


    return (
        <>
            <Navbar className='navbar' expand='lg' >
                <Nav.Link id='app-logo' className="navbar-brand " href="/main"><img src='src/views/img/Watch IT-1.png ' height='120px' width='120px' /></Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Container fluid>
                        <Nav className="me-auto">
                            <Nav.Link id='nav-element' className="navbar-brand" href="/"> <img src='https://cdn-icons-png.flaticon.com/512/10613/10613644.png' height='35px' /> </Nav.Link>
                            <Nav.Link id='nav-element' className="navbar-brand" href="/tvshows"> <img src='https://cdn-icons-png.flaticon.com/512/5181/5181389.png' height='35px' /> </Nav.Link>
                            <Nav.Link id='nav-element' className="navbar-brand" href="/movie"> <img src='https://cdn-icons-png.flaticon.com/512/10939/10939564.png' height='35px' /> </Nav.Link>
                            <Nav.Link id='anime' className="navbar-brand" href="/anime"><img src='https://cdn-icons-png.flaticon.com/512/2314/2314736.png' height='35px' /></Nav.Link>
                            <Nav.Link id='nav-element' className="navbar-brand " href="/shop"><img src='https://cdn-icons-png.flaticon.com/512/4213/4213169.png' height='35px' />
                            </Nav.Link>
                        </Nav>
                    </Container>
                    <Form className="d-flex" onSubmit={SerachTv} >

                        <Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search" name='searchItem' value={searchItem} onChange={changeHandler} />
                        <Button id='nav-element' className='me-3  ' variant="outline-dark" onClick={SerachTv} > <img src='https://cdn-icons-png.flaticon.com/512/10613/10613716.png' height='31px' /> </Button>
                    </Form>
                    <img id='nav-element' src='https://cdn-icons-png.flaticon.com/512/10709/10709674.png' height='35px' />
                    <NavDropdown className='me-5' id="basic-nav-dropdown">
                        <div className="sign-log-icons">
                            <Link to='/fav' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/1458/1458201.png' height='30px' /></Link>
                            <Link to='/fav' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/10102/10102405.png' height='30px' /></Link>
                            <Link to='/fav' ><NavDropdown.Item ></NavDropdown.Item></Link>
                            <Link to='/fav'><NavDropdown.Item ></NavDropdown.Item></Link>

                            <Link to='/login' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/6239/6239002.png' height='60px' /></Link>
                            <Link to='/signup' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/6239/6239065.png' height='61px' /></Link>

                        </div>
                    </NavDropdown>
                    <Link id='nav-element' className="navbar-brand me-5 " to='/cart' ><img src='https://cdn-icons-png.flaticon.com/512/10683/10683181.png' height='39px' />{cart.size}</Link>
                </Navbar.Collapse>


            </Navbar>
            <div id='container-movie' className="container">
                <Navbar id='nav-cont' >
                    <Container >
                        <Nav className="me-auto">
                            <div className="small-nav">
                                <Link id='second-nav-bar' className="navbar-brand" onClick={trendingMovies} >Trending</Link>
                                <Link id='second-nav-bar' className="navbar-brand" onClick={popularMovie}>Popular</Link>
                                <Link id='second-nav-bar' className="navbar-brand" onClick={upComingMovie} >UpComing </Link>
                            </div>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div id='movies' className='container' >
                {currentPosts && currentPosts.length > 0 ? currentPosts.map((m, index) => {
                    return (
                        <div className="container" key={index}>
                            <Card.Title> <h2 className='movies-txt'>{m.title}</h2></Card.Title>
                            <Nav.Link href={`/movies/${m.id}`}><img className="movies-imgs" variant="top" src={getImg(m.poster_path)} /></Nav.Link>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='box-txt'>Rating: {m.vote_average} <i className="fa-solid fa-star-half-stroke"></i></ListGroup.Item>
                                <ListGroup.Item className='box-txt'>popularity: {m.popularity} </ListGroup.Item>
                                <ListGroup.Item className='box-txt'>Date: {m.release_date} </ListGroup.Item>
                            </ListGroup>
                        </div>
                    )

                }) : <section className="dots-container">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <h1>loading... </h1>
                </section>
                }
            </div >
            <Pagination totalPosts={movie.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <Footer />
        </>
    )
}
export default Movie