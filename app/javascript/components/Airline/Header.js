import React from 'react'

const Header = (props) => {
  const {name, img_url, avg_score} = props.attributes 
  const total = props.reviews.length 
  return (
    <div className="wrapper">
      <h1><img src={img_url } alt={name} />{name}</h1>
      <div>
        <div className={total} User reviews></div>
        <div className="starRating"></div>
        <div className="totalOutOf">{avg_score } out of 5</div>
      </div>
    </div>
  )
}

export default Header