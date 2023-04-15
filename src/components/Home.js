import React, { useState, useEffect } from 'react'
import CertCard from './CertCard'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const Home = () => {
  const [cert, setCert] = useState([])
  const certCollectionRef = collection(db, 'Certifications')
  useEffect(() => {
    const getCertifications = async () => {
      const data = await getDocs(certCollectionRef)
      setCert(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getCertifications()
  }, [])
  // const horzScroll = {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   overflow: 'auto'
  // }
  return (
    <div>
      <h2 style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>Choose from a wide range of Courses</h2>
      <h4 style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>Courses for Web Development</h4>
      <div className='horzScroll'>
        {cert.map((cert) => {
          if (cert.Category === 1) {
            return <CertCard img={cert.image} title={cert.Title} text={cert.Desc} key={cert.id} />
          } else {
            return
          }
        })}
      </div>
      <h4 style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>Courses for Application Development</h4>
      <div className='horzScroll'>
        {cert.map((cert) => {
          if (cert.Category === 2) {
            return <CertCard img={cert.image} title={cert.Title} text={cert.Desc} key={cert.id} />
          } else {
            return
          }
        })}
      </div>
      <h4 style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>Courses for Data Analytics</h4>
      <div className='horzScroll'>
        {cert.map((cert) => {
          if (cert.Category === 3) {
            return <CertCard img={cert.image} title={cert.Title} text={cert.Desc} key={cert.id} />
          } else {
            return
          }
        })}
      </div>
      <h4 style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>Courses for Artifical Intelligence and Machine Learning</h4>
      <div className='horzScroll'>
        {cert.map((cert) => {
          if (cert.Category === 4) {
            return <CertCard img={cert.image} title={cert.Title} text={cert.Desc} key={cert.id} />
          } else {
            return
          }
        })}
      </div>
      <h4 style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>Courses for Data Structures and Algorithms</h4>
      <div className='horzScroll'>
        {cert.map((cert) => {
          if (cert.Category === 5) {
            return <CertCard img={cert.image} title={cert.Title} text={cert.Desc} key={cert.id} />
          } else {
            return
          }
        })}
      </div>
      <h4 style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>Courses for UI/UX development</h4>
      <div className='horzScroll'>
        {cert.map((cert) => {
          if (cert.Category === 6) {
            return <CertCard img={cert.image} title={cert.Title} text={cert.Desc} key={cert.id} />
          } else {
            return
          }
        })}
      </div>
      <h4 style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>Courses for Programming Languages</h4>
      <div className='horzScroll'>
        {cert.map((cert) => {
          if (cert.Category === 7) {
            return <CertCard img={cert.image} title={cert.Title} text={cert.Desc} key={cert.id} />
          } else {
            return
          }
        })}
      </div>
      <h4 style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>Courses for Cloud development</h4>
      <div className='horzScroll'>
        {cert.map((cert) => {
          if (cert.Category === 8) {
            return <CertCard img={cert.image} title={cert.Title} text={cert.Desc} key={cert.id} />
          } else {
            return
          }
        })}
      </div>
    </div>
  )
}

export default Home
