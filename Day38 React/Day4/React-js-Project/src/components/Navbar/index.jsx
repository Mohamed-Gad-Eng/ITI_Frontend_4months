import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router';
import './navbar.css'
import { useSelector } from 'react-redux';
export default function Header() {
  const counter = useSelector((state) => state.counter.counter)


  const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About Us' },
    { path: '/products', name: 'Products' },
    { path: '/login', name: 'Login' },

  ]
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav_routes">
            {/* {routes.map((route) => <Link to={route.path} key={route.name}>{route.name}</Link>
            )} */}

            {routes.map((route) =>
              <NavLink to={route.path}
                // className={({isActive})=>(isActive)?'text-danger':''} 
                style={({ isActive }) => (isActive) ? { backgroundColor: '#09c', color: 'white' } : {}}
                key={route.name}>{route.name}</NavLink>
            )}

          </Nav>
          <p>Counter is {counter}</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
