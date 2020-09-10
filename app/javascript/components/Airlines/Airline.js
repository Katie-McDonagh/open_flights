import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Airline = () => {
  return (
    <div className='card'>
      <div className='airline-logo'>
        <img src={props.attributes.mage_url} alt={props.attributes.name}/>
      </div>
      <div className='airline-name'>{props.attributes.name}</div>
      <div className='airline-score'>{props.attributes.avg_score}</div>
      <div className='airline-link'>
        <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
      </div>
    </div>
  )
}

export default  Airline 