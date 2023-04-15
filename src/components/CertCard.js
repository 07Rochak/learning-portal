import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const CertCard = (props) => {
  return (
    <Card style={{ width: '38rem', marginRight: '20px', marginTop: '9px', marginBottom: '9px' }}>
      <Card.Img variant='top' src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant='primary' style={{ bottom: '10px' }}>Enroll</Button>
      </Card.Body>
    </Card>
  )
}

export default CertCard
