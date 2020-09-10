import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Airlines = () => {
  const [airlines, setAirLines] = useState([])

  useEffect(() => {
    //get all airlines from API
    //update airlines on our site
    Axios.get('./api/v1/airlines.json')
    .then( resp => console.log(resp) )
    .catch( resp => console.log(resp) )
  }, [airlines.length])

  return (
  <div>This is the Airlines#index for our app</div>
  )
}

export default Airlines