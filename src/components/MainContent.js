import React from 'react'
import Home from './Home'
import InProgress from './InProgress'
import Completed from './Completed'

const MainContent = (props) => {
  if (props.value === 'ip') {
    return (
      <div><InProgress /></div>
    )
  } else if (props.value === 'comp') {
    return (
      <div><Completed /></div>
    )
  } else {
    return (
      <div><Home /></div>
    )
  }
}

export default MainContent
