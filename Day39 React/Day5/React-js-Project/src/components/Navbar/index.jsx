import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router';
import './navbar.css'
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme.context';
export default function Header() {
  const counter = useSelector((state) => state.counter.counter)

 const {theme,setTheme} =useContext(ThemeContext)


  const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About Us' },
    { path: '/products', name: 'Products' },
    { path: '/login', name: 'Login' },
    { path: '/register', name: 'Register' },

  ]
  return (
    <Navbar expand="lg" bg={theme} variant={theme}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav_routes">
            {/* {routes.map((route) => <Link to={route.path} key={route.name}>{route.name}</Link>
            )} */}

            {routes.map((route) =>
              <Nav.Link as={NavLink} to={route.path}
                // className={({isActive})=>(isActive)?'text-danger':''} 
                style={({ isActive }) => (isActive) ? { backgroundColor: '#09c', color: 'white' } : {}}
                key={route.name}>{route.name}</Nav.Link>
            )}

          </Nav>
          {/* <p>Counter is {counter}</p> */}
          <p>Theme is : {theme}</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
