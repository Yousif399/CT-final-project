import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const MyNav = () => {
    return (
        <>
            <div>
                <Navbar bg="light" data-bs-theme="light">
                    <Link className="navbar-brand" to="/">Watch IT</Link>
                    <Container>
                        <Nav className="me-auto">
                            <Link className="navbar-brand" to='/'>Home</Link>
                            <Link className="navbar-brand" to='/tvshows'>TvShows</Link>
                            <Link className="navbar-brand" to='/movie' >Movies</Link>
                            <Link className="navbar-brand" to='/anime' >Anime</Link>
                            <Link className="navbar-brand" to='/shop' >Shop</Link>
                        </Nav>

                    </Container>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search" />
                        <Button className='me-3' variant="outline-dark">Search</Button>
                    </Form>
                    <NavDropdown className='me-4' title="User" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Favorite
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Link className="navbar-brand" to='/cart' >Cart</Link>
                </Navbar>
            </div>
        </>
    )
}

export default MyNav;