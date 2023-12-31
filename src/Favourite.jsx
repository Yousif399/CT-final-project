import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MyNav from './comp/myNav'
import Footer from './views/footer'
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import { Container, Navbar } from 'react-bootstrap';




const Favourite = () => {
    const [favorite, setFavorite] = useState()
   


    const getFavorite = async () => {
        const response = await fetch(`https://watch-it-bakend.onrender.com/api/get-fav`)
        const data = await response.json()
        // console.log(data.data)
        setFavorite(data.data)
    }
 
   


    const getImg = (poster_path) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }
    useEffect(() => {
        getFavorite()
        
    }, [])
    return (
        <>
            <MyNav />
            <div id='container-anime' className="container">
                <Navbar   >
                    <Container>
                        <Nav className="me-auto">
                        <Link to='/fav'  id='second-nav-bar' className="navbar-brand"   >TvShows</Link>
                            <Link to='/fav1' id='second-nav-bar' className="navbar-brand">Animes</Link>
                            <Link to='/fav2'  id='second-nav-bar' className="navbar-brand">Movies</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div id='tv-shows' className='container' >
                {favorite ? favorite.map((f, index) => {
                    // console.log(f.img)
                    return (
                        
                            < div className="container" key={index} >
                                {
                                    f.img ? <Link to={`/fav/${f.item_id}`} ><div className="img-view-movie"><img src={getImg(f.img)} height='390px'></img></div> </Link>
                                    :  <Link to={`/fav/${f.item_id}`} ><div className="img-view-movie"><img src={f.img} height='390px'></img></div> </Link>
                                }

                                

                            </div >


                        
                    )
                }) :  <section className="dots-container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <h1>loading... </h1>
              </section>}





            </div>

            <Footer />
        </>
    )




}
export default Favourite





















//     <section className="dots-container">
//         <div className="dot"></div>
//         <div className="dot"></div>
//         <div className="dot"></div>
//         <div className="dot"></div>
//         <div className="dot"></div>
//         <h1>loading... </h1>
//     </section>
