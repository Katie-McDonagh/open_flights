import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`
const AirlineLogo = styled.div`
  height: 50px;
  img {
    height: 50px;
    width: 50px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
  }
`
const AirlineName = styled.div``
const LinkWrapper = styled.div``


const Airline = () => {
  return (
    <Card>
      <AirlineLogo>
        <img src={props.attributes.mage_url} alt={props.attributes.name}/>
      </AirlineLogo>
      <div className='airline-name'>{props.attributes.name}</div>
      <div className='airline-score'>{props.attributes.avg_score}</div>
      <div className='airline-link'>
        <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link >
      </div>
    </Card>
  )
}

export default  Airline 