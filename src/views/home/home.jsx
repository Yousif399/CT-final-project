import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import './home.css'
import Footer from '../footer';
import { DataContext } from '../../context/DataProvider';

const Home = () => {
  const [movie, setMovie] = useState([])
  const [searchItem, setSearchItem] = useState('')
  const [trending, setTrending] = useState([])
  const { cart, setCart } = useContext(DataContext)



  const SerachShows = async (e) => {
    e.preventDefault();
    console.log('Searchingggg')
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchItem}&api_key=e832cdb11d340463dee240ac72d617f1`)
      const data = await response.json()
      // console.log(data)
      setMovie(data.results)
    }
    catch (e) {
      console.log(e)
    }
  }

  const changeHandler = (e) => {
    setSearchItem(e.target.value)
  }
  const getImg = (poster_path) => {
    return `https://image.tmdb.org/t/p/w500${poster_path}`
  }

  const getTrending = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=e832cdb11d340463dee240ac72d617f1`)
    const data = await response.json()
    // console.log(data)
    setTrending(data.results)
  }

  useEffect(() => {
    getTrending()
  }, [])

  return (
    <>
      <div>
        <Navbar className='navbar' expand='lg' >
          <Container fluid >
            <Nav.Link id='app-logo' className="navbar-brand " href="/mine"><img src='src/views/img/Watch IT-1.png ' height='120px' width='120px' /></Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">


              <Nav className="me-auto">
                <Nav.Link id='nav-element' className="navbar-brand" href="/main"> <img src='https://cdn-icons-png.flaticon.com/512/10613/10613644.png' height='35px' /> </Nav.Link>
                <Nav.Link id='nav-element' className="navbar-brand" href="/tvshows"> <img src='https://cdn-icons-png.flaticon.com/512/5181/5181389.png' height='35px' /> </Nav.Link>
                <Nav.Link id='nav-element' className="navbar-brand" href="/movie"> <img src='https://cdn-icons-png.flaticon.com/512/10939/10939564.png' height='35px' /> </Nav.Link>
                <Nav.Link id='anime' className="navbar-brand" href="/anime"><img src='https://cdn-icons-png.flaticon.com/512/2314/2314736.png' height='35px' /></Nav.Link>
                <Nav.Link id='nav-element' className="navbar-brand " href="/shop"><img src='https://cdn-icons-png.flaticon.com/512/4213/4213169.png' height='35px' />
                </Nav.Link>
              </Nav>
              <Form className="d-flex" onSubmit={SerachShows} >

                <Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search" name='searchItem' value={searchItem} onChange={changeHandler} />
                <Button id='nav-element' className='me-3  ' variant="outline-dark" onClick={SerachShows} > <img src='https://cdn-icons-png.flaticon.com/512/10613/10613716.png' height='31px' /> </Button>
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
              {
                cart.size === 0 ? <Link id='nav-element' className="navbar-brand me-5 " to='/shop' ><img src='	https://cdn-icons-png.flaticon.com/512/10683/10683181.png' height='39px' />{cart.size}</Link>
                  : <Link id='nav-element' className="navbar-brand me-5 " to='/cart' ><img src='	https://cdn-icons-png.flaticon.com/512/10683/10683181.png' height='39px' />{cart.size}</Link>
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div id='tv-shows' className='container' >
          {movie && movie.length > 0 ? movie.map((m, index) => {
            // console.log(movie)
            return (
              // to={`/anime/${a.mal_id}`}
              <div className="container" key={index}>
                <Card.Title> <h2 className='tv-shows-txt'>{m.title}</h2></Card.Title>
                <Nav.Link href={`/viewmovie/${m.id}`}><img className="tv-shows-img" variant="top" src={getImg(m.poster_path)} /></Nav.Link>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className='box-txt'>Rating: {m.vote_average} <i className="fa-solid fa-star-half-stroke"></i></ListGroup.Item>
                  <ListGroup.Item className='box-txt'>popularity: {m.popularity} </ListGroup.Item>
                  <ListGroup.Item className='box-txt'>Date:  {m.first_air_date} </ListGroup.Item>
                </ListGroup>
              </div>
            );
          }) : (trending && trending.length > 0 ? trending.map((m, index) => {
            return (
              // to={`/anime/${a.mal_id}`}
              <div className="container" key={index}>
                < Carousel data-bs-theme="dark">
                  <Carousel.Item >
                    <Nav.Link href={`/movies/${m.id}`} > <img src={getImg(m.poster_path)} /> </Nav.Link>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Nav.Link href={`/movies/${m.id}`} > <img src={getImg(m.backdrop_path)} /> </Nav.Link>

                  </Carousel.Item>
                  <Carousel.Item>
                    <Nav.Link href={`/movies/${m.id}`} > <img src={getImg(m.poster_path)} /> </Nav.Link>

                  </Carousel.Item>
                </Carousel>

              </div>
            );
          }) : <section className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <h1>loading... </h1>
          </section>)

          }
        </div>
      </div >
      <Footer />
    </>
  )
}

export default Home








// {trending && trending.length > 0 ?
//   < Carousel data-bs-theme="dark">
//     <Carousel.Item >
//       <img src={getImg(trending[0].poster_path)} />
//     </Carousel.Item>
//     <Carousel.Item>
//       <img src={getImg(trending[1].poster_path)} />
//     </Carousel.Item>
//   </Carousel>
//   : <h1>NO DATA</h1>}