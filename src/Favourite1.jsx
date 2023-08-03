import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Footer from './views/footer';
import MyNav from './comp/myNav';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

const Favourite1 = () => {
    const [favorite, setFavorite] = useState()
    

    const getFavorite1 = async () => {
        const response = await fetch(`http://127.0.0.1:5000/api/get-fav/anime`)
        const data = await response.json()
        console.log(data.data)
        setFavorite(data.data)
    }
    useEffect(() => {
        getFavorite1()

    }, [])
    return (
        <>
            <MyNav />
            <div id='container-anime' className="container">
                <Navbar   >
                    <Container>
                        <Nav className="me-auto">
                            <Link to='/fav' id='second-nav-bar' className="navbar-brand"    >TvShows</Link>
                            <Link id='second-nav-bar' className="navbar-brand"    >Animes</Link>
                            <Link to='/fav2' id='second-nav-bar' className="navbar-brand"  >Movies</Link>
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
                                    f.img ? <Link to={`/fav1/${f.item_id}`} ><div className="img-view-movie"><img src={(f.img)} height='390px'></img></div> </Link>
                                        : <Link to={`/fav1/${f.item_id}`} ><div className="img-view-movie"><img src={f.img} height='390px'></img></div> </Link>
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

export default Favourite1