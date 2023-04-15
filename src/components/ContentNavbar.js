import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import MainContent from './MainContent'
import '../styles/ContentNavbar.css'

const ContentNavbar = () => {
  const [content, setContent] = useState('home')
  const handleHome = () => {
    setContent('home')
  }
  const handleIP = () => {
    setContent('ip')
  }
  const handleComp = () => {
    setContent('comp')
  }
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home' className='LinkName' onClick={handleHome}>Home</Nav.Link>
              <Nav.Link href='#ip' className='LinkName' onClick={handleIP}>In-Progress</Nav.Link>
              <Nav.Link href='#comp' className='LinkName' onClick={handleComp}>Completed</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MainContent value={content} />
    </div>
  )
}

export default ContentNavbar
