/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Nav } from 'react-bootstrap';
import Navbar  from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" bsPrefix='navbar-toggler'/>
  <Navbar.Collapse id="responsive-navbar-nav" bsPrefix='navbar-collapse'>
    <Nav className="ms-auto text-end">
       <Link className = 'nav-link' exact to="/">Home</Link>
       <Link className = 'nav-link' exact to="/fotos">Fotos</Link>
       <Link className = 'nav-link' exact to="/sobremi">Sobre mí</Link>
       <Link className = 'nav-link' exact to="/login">Login</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;
