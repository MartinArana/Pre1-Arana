import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css"

function NavBar() {
    return (
        <>
            <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Categoria1</Nav.Link>
                            <Nav.Link href="#">Categoria2</Nav.Link>
                        </Nav>
                        <Nav>
                            <p>
                                <CartWidget/> 4
                            </p>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;