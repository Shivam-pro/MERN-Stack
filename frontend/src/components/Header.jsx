import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { Storecontext } from '../context/Storecontext';

const Header = () => {
  const {token, setToken} = useContext(Storecontext);
  const [display, setDisplay] = useState("/");
  const username = localStorage.getItem("username");
  const nevigate = useNavigate()
  const noteHandler = () => {
    if (!token) {
      setDisplay("/login");
    }
    else {
      setDisplay("/mynotes");
    }
  }
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken("");
    nevigate("/");
  }
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to='/' className='no-underline!'>
              NotesWriter
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className='d-flex mx-auto align-items-center'>
              <Form className="d-flex m-auto">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </div>
            <Nav
              className="mr-0 my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href={display} onClick={noteHandler}>
                MyNotes
              </Nav.Link>
              <NavDropdown.Divider />
              {token ?
                <NavDropdown title={username} id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">MyProfile</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                : ""
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
