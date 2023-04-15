import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../assets/yellowBackground.PNG'
import img2 from '../assets/yellowBackground2.png'
import img3 from '../assets/yellowBackground3.png'

const DescCard = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className='d-block w-100'
          src={img1}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Wide range of courses</h3>
          <p>We provide a wide range of courses to excel in different fields</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className='d-block w-100'
          src={img2}
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>Courses from begginer to advance levels</h3>
          <p>The course try to cover every aspect of the technology and is divided into dfferent levels</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className='d-block w-100'
          src={img3}
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Project Based Learning</h3>
          <p>
            Our Course follows project based learning which helps in better learning
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default DescCard
