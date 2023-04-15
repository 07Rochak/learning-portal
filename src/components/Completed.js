import React, { useState, useEffect } from 'react'
import CertCard from './CertCard'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const Completed = () => {
  const [cert, setCert] = useState([])
  const certCollectionRef = collection(db, 'InProgress')
  useEffect(() => {
    const getCertifications = async () => {
      const data = await getDocs(certCollectionRef)
      setCert(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getCertifications()
  }, [])
  return (
    <div>
      <h4 style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>Completed Courses</h4>
      <div className='horzScroll'>
        {cert.map((cert) => {
          return <CertCard img={cert.image} title={cert.Title} text={cert.Desc} key={cert.id} />
        })}
      </div>
    </div>
  )
}

export default Completed
