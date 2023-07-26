import React, { useState, useEffect } from 'react'
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



const Anime = () => {
    const [anime, setAnime] = useState([])

    useEffect(() => {
        axios.get('https://api.jikan.moe/v4/top/anime?filter=bypopularity').then((response) => {
            setAnime(response.data.data)
            console.log(response.data.data)
        }).catch((err) => { console.log(err) })

    }, [])
    return (
        <>
            <div className="container">
                <Navbar bg="light" data-bs-theme="light">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search" />
                        <Button className='me-3' variant="outline-dark">Search</Button>
                    </Form>

                </Navbar>
            </div>

            <div id='an-con' className="container">
                {anime && anime.length > 0 ? anime.map((a, index) => {
                    return (
                        <div className="container" key={index}>
                            <div className="main-anime">
                                <Card.Title> <h2 className='anime-txt'> {a.title_english}</h2></Card.Title>
                                <Link to={`/anime/${a.mal_id}`}><img className='anime-imgs' src={a.images.webp.large_image_url} /></Link>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className='box-txt'>Rating: {a.rating} <i className="fa-solid fa-star-half-stroke"></i></ListGroup.Item>
                                    <ListGroup.Item className='box-txt'>Score: {a.score} </ListGroup.Item>
                                    <ListGroup.Item className='box-txt'>Date: {a.year} </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    )


                }) : <h1>loading</h1>
                }
            </div >
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