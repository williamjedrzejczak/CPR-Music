import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginOut from './loginout';

function Navigation() {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Music CPR</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/courses" passHref>
              <Nav.Link>Courses</Nav.Link>
            </Link>
            {/* <NavDropdown title="Courses" id="basic-nav-dropdown">
              <Link href="/courses" passHref>
                <NavDropdown.Item>All</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/courses/new" passHref>
                <NavDropdown.Item>Add</NavDropdown.Item>
              </Link>
              <Link href="/courses/edit" passHref>
                <NavDropdown.Item>Edit</NavDropdown.Item>
              </Link>
            </NavDropdown> */}
            <NavDropdown title="Assignments" id="basic-nav-dropdown">
              <Link href="/courses/melody-assignment" passHref>
                <NavDropdown.Item>Melody</NavDropdown.Item>
              </Link>
              <Link href="/courses/bass-assignment" passHref>
                <NavDropdown.Item>Bass</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/courses/creativity-assignment" passHref>
                <NavDropdown.Item>Creativity</NavDropdown.Item>
              </Link>
              <Link href="/courses/reflection-assignment" passHref>
                <NavDropdown.Item>Reflection</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <LoginOut />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
