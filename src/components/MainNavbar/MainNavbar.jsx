import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import viteLogo from '../../../public/vite.svg'
import './MainNavbar.css'

export default function MainNavbar() {
  return (
    <Container id="root-container">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              id="react-svg"
              alt="React Logo"
              src="../assets/react.svg"
              className="d-inline-block align-top"
            />
            +
            <img
              id="vite-svg"
              alt="Vite Logo"
              src={viteLogo}
              className="d-inline-block align-top"
            />
            MainNavbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#documentation">Documentation</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  )
}