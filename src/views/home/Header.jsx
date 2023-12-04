import React, { useContext, useEffect, useState } from 'react'
import './mainhome.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CarouselApp from './CarouselApp';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselApp1 from './CarouselApp1';
import AnimeSlider from '../anime/AnimeSlider';
import Footer from '../footer';
import { DataContext } from '../../context/DataProvider';


const Header = () => {
    const [movie, setMovie] = useState([])
    const [tvShow, setTvShow] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [anotherAnime, setAnotherAnime] = useState([])
    const { cart, setCart } = useContext(DataContext)


    const trendingMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        console.log(data.results)
        setMovie(data.results)
    }
    const trendingTvs = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=e832cdb11d340463dee240ac72d617f1`)
        const data = await response.json()
        console.log(data.results)
        setTvShow(data.results)
    }
    const sliderAnime = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/seasons/now`)
        const data = await response.json()
        console.log(data.data)
        setAnotherAnime(data.data)
    }
    const SerachTvMovie = async (e) => {
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
        trendingMovies()
        trendingTvs()
        sliderAnime()
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <header>

                
                <Navbar className='navbar m-b-200' expand='lg'  >
                    <Container fluid  >
                    <Nav.Link id='app-logo' className="navbar-brand " href="/main"><img src='src/views/img/Watch IT-1.png' height='120px' width='120px' /></Nav.Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link id='nav-element' className="navbar-brand" href="/"> <img src='https://cdn-icons-png.flaticon.com/512/10613/10613644.png' height='35px' /> </Nav.Link>
                                <Nav.Link id='nav-element' className="navbar-brand" href="/tvshows"> <img src='https://cdn-icons-png.flaticon.com/512/5181/5181389.png' height='35px' /> </Nav.Link>
                                <Nav.Link id='nav-element' className="navbar-brand" href="/movie"> <img src='https://cdn-icons-png.flaticon.com/512/10939/10939564.png' height='35px' /> </Nav.Link>
                                <Nav.Link id='anime' className="navbar-brand" href="/anime"><img src='https://cdn-icons-png.flaticon.com/512/2314/2314736.png' height='35px' /></Nav.Link>
                                <Nav.Link id='nav-element' className="navbar-brand " href="/shop"><img src='https://cdn-icons-png.flaticon.com/512/4213/4213169.png' height='35px' />
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex" onSubmit={SerachTvMovie} >

                                <Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search" name='searchItem' value={searchItem} onChange={changeHandler} />

                                <Button id='nav-element' className='me-3  ' variant="outline-dark" onClick={SerachTvMovie} > <img src='https://cdn-icons-png.flaticon.com/512/10613/10613716.png' height='31px' /> </Button>
                            </Form>
                            <img id='nav-element' src='https://cdn-icons-png.flaticon.com/512/10709/10709674.png' height='35px' />
                            <NavDropdown className='me-5' id="basic-nav-dropdown">
                                <div className="sign-log-icons">
                                    <Link to='/fav' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/1458/1458201.png' height='30px' /></Link>
                                    <Link to='/fav' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/10102/10102405.png' height='30px' /></Link>
                                    <Link to='/' ></Link>
                                    <Link to='/fav'><NavDropdown.Item ></NavDropdown.Item></Link>

                                    <Link to='/login' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/6239/6239002.png' height='60px' /></Link>
                                    <Link to='/signup' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/6239/6239065.png' height='61px' /></Link>

                                </div>
                            </NavDropdown>
                            <Link id='nav-element' className="navbar-brand me-5 " to='/cart' ><img src='	https://cdn-icons-png.flaticon.com/512/10683/10683181.png' height='39px' />{cart.size}</Link>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>


                <div className="slide">
                    <Carousel responsive={responsive}>

                        {
                            movie.map((m) => {
                                return <CarouselApp key={m.id} actualData={m} />

                            })
                        }
                    </Carousel>;

                    <Carousel responsive={responsive}>
                        {
                            tvShow.map((t) => {
                                return <CarouselApp1 key={t.id} actualData={t} />

                            })
                        }
                    </Carousel>;

                    <Carousel responsive={responsive} >

                        {
                            anotherAnime.map((a) => {
                                return <AnimeSlider key={a} actualData={a} />
                            })
                        }

                    </Carousel>


                </div>


            </header >



        </>
    )
}

export default Header



