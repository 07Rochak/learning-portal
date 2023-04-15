import React from 'react'
import '../styles/CenterContent.css'
import img1 from '../assets/frontimage.jpg'

const CenterContent = () => {
  return (
    <div className='centerContainer'>
      <div className='center-content'>
        <span className='tag'>Take your time</span><br />
        <span>and learn from</span><span className='tag2'><br />anywhere</span>
        <br />
        <span className='tagLine'>A learning system to help you learn and develop skills</span>
      </div>
      <br />
      <span className='tagLine2'>with a course recommendation system</span>
      <img src={img1} alt='art1' className='imgStyle' />
    </div>
  )
}

export default CenterContent
