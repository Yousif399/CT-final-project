import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap"
import '../views/tvshows/tvshow.css'
import { DataContext } from '../context/DataProvider';
import { useAuth, useSigninCheck, useUser } from 'reactfire';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
const MyNav = () => {
    const { cart, setCart } = useContext(DataContext)
    // const auth = useAuth();

    // const {data:user} = useUser();
    // const {signinStatus} = useSigninCheck();

    // const signIn = async () =>{
    //     let provider = new GoogleAuthProvider();
    //     let u = await signInWithPopup(auth, provider);
    //     console.log(u)
       
        
    // }
    // const signOut = async () =>{
    //     await signOut(auth).then(()=>{console.log('ur outt')})
    // }


    return (

        <Navbar className='navbar' >
            <Nav.Link id='app-logo' className="navbar-brand " href="/main"><img src='/src/img/Watch IT-1.png' height='120px' width='120px' /></Nav.Link>
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
            {/* <Form className="d-flex" onSubmit={SerachTv} >

                <Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search" name='searchItem' value={searchItem} onChange={changeHandler} />
                <Button className='me-3  ' variant="outline-dark" onClick={SerachTv} > <img src='https://cdn-icons-png.flaticon.com/512/10613/10613716.png' height='31px' /> </Button>
            </Form> */}
            <img id='nav-element' src='https://cdn-icons-png.flaticon.com/512/10709/10709674.png' height='35px' />

            {/* {
                signinStatus === 'loading' ?
                <button >LOadinggg</button>:
                user ?
                <>
                <span>{user.displayName}</span>
                <button onClick={signOut} >Log Out</button>
                </>:<button onClick={signIn} >Sign In</button>

            } */}
            






            <NavDropdown className='me-5' id="basic-nav-dropdown">
                <div className="sign-log-icons">
                    <Link to='/fav' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/1458/1458201.png' height='30px' /></Link>
                    <Link to='/fav' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/10102/10102405.png' height='30px' /></Link>
                    <Link to='/signin' ><NavDropdown.Item ></NavDropdown.Item></Link>
                    <Link to='/signup'><NavDropdown.Item ></NavDropdown.Item></Link>
                    <Link to='/login' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/6239/6239002.png' height='60px' /></Link>
                    <Link to='/signup' className='loginicon'><img src='https://cdn-icons-png.flaticon.com/512/6239/6239065.png' height='61px' /></Link>

                </div>
            </NavDropdown>
            {
                cart.size === 0 ?  <Link id='nav-element' className="navbar-brand me-5 " to='/shop' ><img src='	https://cdn-icons-png.flaticon.com/512/10683/10683181.png' height='39px' /></Link>
                :<Link id='nav-element' className="navbar-brand me-5 " to='/cart' ><img src='	https://cdn-icons-png.flaticon.com/512/10683/10683181.png' height='39px' />{cart.size}</Link>
            }
            
        </Navbar>



    )
}

export default MyNav;