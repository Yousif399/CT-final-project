import axios from 'axios';
import React, { useState, useEffect,useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Card, NavLink } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import "./shop.css"
import Footer from '../footer';
import { DataContext } from '../../context/DataProvider';




const Shop2 = () => {
    const [items, setItems] = useState({})
    const [search, setSearch] = useState('')
    const { cart, setCart } = useContext(DataContext)





    const searchItem = async (e) => {
        e.preventDefault();
        console.log('searching')
        try {
            const response = await fetch(`https://api.asindataapi.com/request?api_key=1DE362053E5042A587CB238DC95794AC&amazon_domain=amazon.com&type=search&search_term=${search}`)
            // console.log(response)
            const data = await response.json()
            console.log(data.search_results)
            setItems(data.search_results)
        }
        catch (e) {
            console.log(e)
        }
    }


    const changeHandler = (e) => {
        setSearch(e.target.value)
    }

    const addProduct = (products) => {
        // copy
        let copyCart = { ...cart };
        // change copy
        copyCart.size++;
        copyCart.total += Math.floor(products.prices.value * 100) / 100
        // set state 
        copyCart.products[products.id] ?
            copyCart.products[products.id].quantity++
            :
            copyCart.products[products.id] = { data: products, quantity: 1 }
        console.log(copyCart);
        setCart(copyCart);
      }

    return (
        <>
            <Navbar className='navbar' >
                <Nav.Link id='app-logo' className="navbar-brand " href="/main"><img src='src/views/img/Watch IT-1.png ' height='120px' width='120px' /></Nav.Link>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link id='nav-element' className="navbar-brand" href="/"> <img src='https://cdn-icons-png.flaticon.com/512/10613/10613644.png' height='35px' /> </Nav.Link>
                        <Nav.Link id='nav-element' className="navbar-brand" href="/tvshows"> <img src='https://cdn-icons-png.flaticon.com/512/5181/5181389.png' height='35px' /> </Nav.Link>
                        <Nav.Link id='nav-element' className="navbar-brand" href="/movie"> <img src='https://cdn-icons-png.flaticon.com/512/10939/10939564.png' height='35px' /> </Nav.Link>
                        <Nav.Link id='anime' className="navbar-brand" href="/anime"><img src='https://cdn-icons-png.flaticon.com/512/2314/2314736.png' height='35px' /></Nav.Link>
                        <Nav.Link id='nav-element' className="navbar-brand " href="/shop"><img src='https://cdn-icons-png.flaticon.com/512/4213/4213169.png' height='35px' />
                        </Nav.Link>
                    </Nav>
                </Container>

                <Form className="d-flex" onSubmit={searchItem} >

                    < Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search" name='search' value={search} onChange={changeHandler} />
                    <Button id='nav-element' className='me-3  ' variant="outline-dark" onClick={searchItem} > <img src='https://cdn-icons-png.flaticon.com/512/10613/10613716.png' height='31px' /> </Button>
                </Form>
                <img src='https://cdn-icons-png.flaticon.com/512/10709/10709674.png' height='35px' />
                <NavDropdown className='me-5' id="basic-nav-dropdown">
                    <div className="sign-log-icons">
                        <Link to='/signin' ><NavDropdown.Item ><img src='https://cdn-icons-png.flaticon.com/512/1458/1458201.png' height='30px' /></NavDropdown.Item></Link>
                        <Link to='/signup'><NavDropdown.Item ><img src='https://cdn-icons-png.flaticon.com/512/10102/10102405.png' height='30px' /></NavDropdown.Item></Link>

                        <Link to='/login' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/6239/6239002.png' height='60px' /></Link>
                        <Link to='/signup' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/6239/6239065.png' height='61px' /></Link>

                    </div>
                </NavDropdown>
                <Link id='nav-element' className="navbar-brand me-5 " to='/cart' ><img src='	https://cdn-icons-png.flaticon.com/512/10683/10683181.png' height='39px' />{cart.size}</Link>
            </Navbar>

            <Nav.Link href='/shop'><button className='me'> <i className="fa-solid fa-caret-left"></i>  Back</button></Nav.Link>
            <div id='an-con' className="container">
                {items && items.length > 0 ? items.map((p, index) => {
                    return (
                        <div className="container" key={index}>
                            <div className="main-anime">
                                <Card.Title> <h2 className='anime-txt'> {p.title}</h2></Card.Title>
                                <Nav.Link href={p.link} target='_blank' ><img className='anime-imgs' src={p.image} /></Nav.Link>
                                <div className="txt-btn">
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className='box-txt'>Rating: {p.rating} <i className="fa-solid fa-star-half-stroke"></i></ListGroup.Item>
                                        <ListGroup.Item className='box-txt'>Price: {p.price ? p.prices[0].value : 'no price'} {p.prices ? p.prices[0].currency : 'no price'} </ListGroup.Item>
                                        {/* <ListGroup.Item className='box-txt'>Date: {} </ListGroup.Item> */}
                                    </ListGroup>
                                <button className="btn-add" onClick={()=>addProduct(p)}><span>Add To Cart</span></button>
                                </div>

                            </div>
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
            <Footer />
        </>
    )
}

export default Shop2;




