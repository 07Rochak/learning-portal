import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

const NavbarC = () => {
  const btn1 = {
    border: '2px solid #ffc107',
    marginRight: '25px',
    borderRadius: '25px',
    padding: '8px 25px 10px 25px',
    fontWeight: '500'
  }
  const btn = {
    marginRight: '25px',
    borderRadius: '25px',
    padding: '8px 30px 10px 30px',
    fontWeight: '500'
  }
  const navigate = useNavigate()
  const handleSignUp = () => {
    navigate('/SignUp')
  }
  const handleLogin = () => {
    navigate('/Login')
  }
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
        <Container>
          <div className='mainHead'>E-Learning Portal</div>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <div style={{ display: 'none' }}>project</div>
            </Nav>
            <Nav>
              <Button variant='light' style={btn1} onClick={handleSignUp}>Sign Up</Button>
              <Button variant='warning' style={btn} onClick={handleLogin}>Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarC
