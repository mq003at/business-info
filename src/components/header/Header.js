import "../../css/Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header(props) {
  // const currentAnchor = props.currentAnchor;

  return (
    <div className="header">
      <Navbar fixed="top">
        <Container fluid>
          <Navbar.Brand href="/" className="pl-2">
            The Winston Company
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav className="justify-content-end" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/#intro" className="navbar-link" onClick={props.scrollIntro}>Intro</Nav.Link>
              <Nav.Link href="/#about-us" className="navbar-link" onClick={props.scrollAboutUs}>About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
