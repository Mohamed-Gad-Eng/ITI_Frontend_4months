import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router';
import './navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme.context';
import { changeAuth } from '../../store/slices/auth';
import { useTranslation } from 'react-i18next';
export default function Header() {
  const counter = useSelector((state) => state.counter.counter)
  const isLoggedin = useSelector((state) => state.isLoggedin.isLoggedin)
 const dispatch= useDispatch()
 const {theme,setTheme} =useContext(ThemeContext)

 const {t,i18n}=  useTranslation()

 const changeLanguage=()=>{
  const lang=localStorage.getItem('lang')=='en'?'ar':'en'
  i18n.changeLanguage(lang)
  localStorage.setItem('lang',lang)

 document.documentElement.dir =(lang=='en')?'ltr':'rtl'
 }

  const routes = [
    { path: '/', name: t('home') },
    { path: '/about', name: t('about') },
    { path: '/products', name: 'Products' },
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
          {isLoggedin?<Nav.Link as={NavLink} to='/login' onClick={()=>{
            localStorage.removeItem('token');
              dispatch(changeAuth(false))
          }}>Logout</Nav.Link>:<Nav.Link as={NavLink} to="/login">Login</Nav.Link>}
          </Nav>
          {/* <p>Counter is {counter}</p> */}
          <p>Theme is : {theme}</p>
          <button className='btn btn-success' onClick={()=>{changeLanguage()}}>lang</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
