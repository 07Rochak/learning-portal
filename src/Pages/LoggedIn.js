// import React, { useState } from 'react'
import React from 'react'
import NavbarL from '../components/NavbarL'
import DescCard from '../components/DescCard'
import ContentNavbar from '../components/ContentNavbar'
// import Offcanvas from 'react-bootstrap/Offcanvas'
// import { Button } from 'react-bootstrap'
// import { BsFillChatRightTextFill } from 'react-icons/bs'

const LoggedIn = () => {
  // const btn1Style = {
  //   position: 'fixed',
  //   bottom: '30px',
  //   right: '50px',
  //   width: '5.5vw',
  //   height: '12vh',
  //   borderRadius: '60px',
  //   color: 'white',
  //   fontSize: '30px'
  // }
  // const [show, setShow] = useState(false)
  // const handleShow = () => { setShow(true) }
  // const handleClose = () => { setShow(false) }
  // const offCanvasTitle = {
  //   backgroundColor: '#ffc107',
  //   width: '100%',
  //   position: 'absolute',
  //   top: '0px',
  //   left: '0px',
  //   padding: '5px 5px 5px 5px'
  // }
  // useEffect(() => {
  //   window.location.reload(false)
  // })
  return (
    <div>
      <NavbarL />
      <DescCard />
      <ContentNavbar />
      {/* <Button variant='warning' style={btn1Style} onClick={handleShow}><BsFillChatRightTextFill /></Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={offCanvasTitle}>Course Recommender</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
    </div>
  )
}

export default LoggedIn
