import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const NavbarL = () => {
  const btn = {
    marginRight: '25px',
    borderRadius: '25px',
    padding: '8px 30px 10px 30px',
    fontWeight: '500'
  }
  const navigate = useNavigate()
  const { logout, user } = UserAuth()
  if (!user) {
    window.location.reload(false)
  }
  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (e) {
      console.log(e.message)
    }
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
              <span style={{ fontWeight: '600', marginRight: '20px', marginTop: '5px' }}>{user && user.email}</span>
              <Button variant='warning' style={btn} onClick={handleLogout}>Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarL
