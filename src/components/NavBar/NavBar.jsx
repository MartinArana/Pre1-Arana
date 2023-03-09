import Container from 'react-bootstrap/Container';
import { NavLink, Link } from 'react-router-dom'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css"

function NavBar() {
    return (
        <>
            <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className='title' href="#">Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='link' to="/">Inicio</Link>
                            <Link className='link' to="/category/personajes">Personajes</Link>
                            <Link className='link' to="/category/accesorios">Accesorios</Link>
                        </Nav>
                        <Nav>
                            <p className='cart-number'>
                                <CartWidget/>
                            </p>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;