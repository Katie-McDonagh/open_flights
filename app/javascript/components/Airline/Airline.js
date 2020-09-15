import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(()=> {
    const slug = props.match.params.slug
    const url = `/api/v1/airlines/${slug}`
    // This uses the v2 api (graphql) as of 05/09/2020.
    // For the v1 api endpoint use: axios.get('/api/v1/airlines/:slug')
    axios.get(url)
    .then( resp => {
      setAirline(resp.data) 
      setLoaded(true)
    })
    .catch( resp => console.log(resp))

  }, [])
  return <div className="wrapper">
    <div className="column">
      {
        loaded && 
      <Header 
        attributes={airline.data.attributes} 
        reviews={airline.included} 
        />
      }
      <div className="reviews"></div>
    </Header>
    <div className="column">
      <div className="review-form">[Review form goes here]</div>
    </div>
  </div>
}

export default Airline