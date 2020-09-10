import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios'
import Airline from './Airline'

const Airlines = () => {
  const [airlines, setAirLines] = useState([])

  useEffect(() => {
    //get all airlines from API
    //update airlines on our site
    Axios.get('./api/v1/airlines.json')
    .then( resp => {
      setAirLines(resp.data.data)
    } )
    .catch( resp => console.log(resp) )
  }, [airlines.length])

  const grid = airplanes.map( item => {
    return (
      <Airline
        key={item.attributes.name}
        attributes={item.attributes}
        />)
  })

  return (
    <div className='home'>
      <div className='header'>
        <h1>Open flights</h1>
        <div className='subHeader'>Honest, unbiased reviews.</div>
      </div>
        <div className='grid'>
          {grid}
        </div>
  </div>
  )
}

export default Airlines