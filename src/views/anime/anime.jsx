import React, { useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom"
import './anime.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Footer from '../footer';
import Pagination from '../Pagination';
import { DataContext } from '../../context/DataProvider';



const Anime = () => {
    const [anime, setAnime] = useState([])
    const [searchAnime, setSearchAnime] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const { cart, setCart } = useContext(DataContext)



    const searchAnimes = async (e) => {
        e.preventDefault();
        console.log('searching')
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchAnime}`)
            console.log(response)
            const data = await response.json()
            // console.log(data)
            setAnime(data.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        popularAnime()
    }, [])
    const popularAnime = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`)
        const data = await response.json()
        // console.log(data.data)
        setAnime(data.data)
    }
    const topAnimes = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/top/anime`)
        const data = await response.json()
        // console.log(data.data)
        setAnime(data.data)
    }

    const upComing = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`)
        const data = await response.json()
        // console.log(data.data)
        setAnime(data.data)
    }
    const changeHandler = (e) => {
        setSearchAnime(e.target.value)
    }

    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currentPosts = anime.slice(firstPost, lastPost);

    return (
        <>
            <Navbar className='navbar' expand='lg' >
                <Nav.Link id='app-logo' className="navbar-brand " href="/mine"><img src='https://i.ibb.co/1Lg57YW/Watch-IT-1.png' height='120px' width='120px' /></Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Container fluid>
                        <Nav className="me-auto">
                            <Nav.Link id='nav-element' className="navbar-brand" href="/main"> <img src='https://cdn-icons-png.flaticon.com/512/10613/10613644.png' height='35px' /> </Nav.Link>
                            <Nav.Link id='nav-element' className="navbar-brand" href="/tvshows"> <img src='https://cdn-icons-png.flaticon.com/512/5181/5181389.png' height='35px' /> </Nav.Link>
                            <Nav.Link id='nav-element' className="navbar-brand" href="/movie"> <img src='https://cdn-icons-png.flaticon.com/512/10939/10939564.png' height='35px' /> </Nav.Link>
                            <Nav.Link id='anime' className="navbar-brand" href="/anime"><img src='https://cdn-icons-png.flaticon.com/512/2314/2314736.png' height='35px' /></Nav.Link>
                            <Nav.Link id='nav-element' className="navbar-brand " href="/shop"><img src='https://cdn-icons-png.flaticon.com/512/4213/4213169.png' height='35px' />
                            </Nav.Link>
                        </Nav>
                    </Container>
                    <Form className="d-flex" onSubmit={searchAnimes} >

                        <Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search" name='searchAnime' value={searchAnime} onChange={changeHandler} />
                        <Button id='nav-element' className='me-3  ' variant="outline-dark" onClick={searchAnimes} > <img src='https://cdn-icons-png.flaticon.com/512/10613/10613716.png' height='31px' /> </Button>
                    </Form>
                    <img src='https://cdn-icons-png.flaticon.com/512/10709/10709674.png' height='35px' />
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
                    {
                        cart.size === 0 ? <Link id='nav-element' className="navbar-brand me-5 " to='/shop' ><img src='	https://cdn-icons-png.flaticon.com/512/10683/10683181.png' height='39px' />{cart.size}</Link>
                            : <Link id='nav-element' className="navbar-brand me-5 " to='/cart' ><img src='	https://cdn-icons-png.flaticon.com/512/10683/10683181.png' height='39px' />{cart.size}</Link>
                    }
                </Navbar.Collapse>
            </Navbar>
            <div id='container-anime' className="container">
                <Navbar   >
                    <Container>
                        <Nav className="me-auto">
                            <Link id='second-nav-bar' className="navbar-brand" onClick={topAnimes} >Top Rated</Link>
                            <Link id='second-nav-bar' className="navbar-brand" onClick={popularAnime}>Popular</Link>
                            <Link id='second-nav-bar' className="navbar-brand" onClick={upComing} >UpComing </Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div id='an-con' className="container">
                {currentPosts && currentPosts.length > 0 ? currentPosts.map((a, index) => {
                    // console.log(a.year)
                    return (
                        <div className="container" key={index}>
                            <div className="main-anime">
                                <Card.Title> <h2 className='anime-txt'> {a.title}</h2></Card.Title>
                                <Nav.Link href={`/anime/${a.mal_id}`}><img className='anime-imgs' src={a.images.webp.large_image_url} /></Nav.Link>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className='box-txt'>Rating: {a.rating} <i className="fa-solid fa-star-half-stroke"></i></ListGroup.Item>
                                    <ListGroup.Item className='box-txt'>Score: {a.score} </ListGroup.Item>
                                    <ListGroup.Item className='box-txt'>Date: {a.year} </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    )
                }) :
                    <section className="dots-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <h1>Loading...OR NO DATA  </h1>
                    </section>
                }
            </div >
            <Pagination
                totalPosts={anime.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

            <Footer />


        </>
    )
}

export default Anime;












{/* <Card style={{ width: '35rem' }}>
<Link to={`/anime/${a.mal_id}`}><Card.Img className="img" variant="top" src={a.images.webp.large_image_url} /></Link>
<Card.Body>

    <Card.Title> <h2>Title: {a.title_english}</h2></Card.Title>
    <Card.Title>  { }</Card.Title>
</Card.Body>
<ListGroup className="list-group-flush">
    <ListGroup.Item>Rating: {a.rating} <i className="fa-solid fa-star-half-stroke"></i></ListGroup.Item>
    <ListGroup.Item>Score: {a.score} </ListGroup.Item>
    <ListGroup.Item>Date: {a.year} </ListGroup.Item>

</ListGroup>
</Card> */}