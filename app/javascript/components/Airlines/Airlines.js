import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios'
import Airline from './Airline'
import styled from 'styled-components'

const Home = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`
const Header = styled.div`
  padding: 100px 100px 10px 100px;
  
  h1{
    font-size: 42px;
  }
`
const SubHeader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  `


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
    <Home>
      <Header>
        <h1>Open flights</h1>
        <SubHeader>Honest, unbiased reviews.</SubHeader>
      </Header>
        <Grid>
          {grid}
        </Grid>
  </Home>
  )
}

export default Airlines