import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MyNav from './comp/myNav'
import Footer from './views/footer'
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import { Container, Navbar } from 'react-bootstrap';




const Favourite2 = () => {
    const [favorite, setFavorite] = useState()
   



 
    const getFavorite2 = async () => {
        const response = await fetch(`https://watch-it-bakend.onrender.com/api/get-fav/movie`)
        const data = await response.json()
        // console.log(data.data)
        setFavorite(data.data)
    }


    const getImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }
    useEffect(() => {
        getFavorite2()
        
    }, [])
    return (
        <>
            <MyNav />
            <div id='container-anime' className="container">
                <Navbar   >
                    <Container>
                        <Nav className="me-auto">
                        <Link id='second-nav-bar' className="navbar-brand"   >TvShows</Link>
                            <Link to='/fav1' id='second-nav-bar' className="navbar-brand">Animes</Link>
                            <Link to='/fav2'  id='second-nav-bar' className="navbar-brand">Movies</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div id='tv-shows' className='container' >
                {favorite ? favorite.map((f, index) => {
                    console.log(f.img)
                    return (
                        <>
                            < div className="container" key={index} >
                                {
                                    f.img ? <Link to={`/fav2/${f.item_id}`} ><div className="img-view-movie"><img src={getImg(f.img)} height='390px'></img></div> </Link>
                                    :  <Link to={`/fav2/${f.item_id}`} ><div className="img-view-movie"><img src={f.img} height='390px'></img></div> </Link>
                                }

                            </div >


                        </>
                    )
                }) : null}





            </div>

            <Footer />
        </>
    )




}
export default Favourite2
