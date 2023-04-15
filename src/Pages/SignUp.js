import React, { useState } from 'react'
import NavbarC from '../components/NavbarC'
import '../styles/SignUp.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'
import img1 from '../assets/signupimg.png'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { createUser } = UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password)
      navigate('/LoggedIn')
      window.location.reload(false)
    } catch (e) {
      setError(e.message)
      alert(e.message)
      console.log(e.message)
      console.log(e)
    }
  }
  return (
    <div>
      <NavbarC />
      <div className='MainSignUpContainer'>
        <Form className='SignUpForm'>
          <Row>
            <Col>
              <Form.Group className='mb-3' controlId='forTitle'>
                <h3 style={{ marginLeft: '11vw' }}>Sign Up</h3>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formGroupEmail'>
                <Form.Label className='FormTitle'>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' className='SignUpField' onChange={(e) => { setEmail(e.target.value) }} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formGroupPassword'>
                <Form.Label className='FormTitle'>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='forTitle'>
                <Button variant='primary' style={{ marginLeft: '11vw' }} onClick={handleSubmit}>Sign Up</Button>
              </Form.Group>
            </Col>
            <Col>
              <img src={img1} alt='signupimg' className='signupimg' />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default SignUp
