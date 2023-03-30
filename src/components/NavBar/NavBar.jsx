import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css"

function NavBar() {
    return (
        <>
            <Navbar className='navbar' bg="" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    {/* <Navbar.Brand className='title' href="/">INICIO</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='link' to="/">INICIO</Link>
                            <Link className='link' to="/category/indumentaria">INDUMENTARIA</Link>
                            <Link className='link' to="/category/personajes">PERSONAJES</Link>
                            <Link className='link' to="/category/accesorios">ACCESORIOS</Link>
                        </Nav>
                        <Nav>
                            <Link to="/cart">
                                <CartWidget/>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;