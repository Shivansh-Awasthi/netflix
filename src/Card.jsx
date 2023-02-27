import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
  <div className='cards'>
    <img src={props.imgsrc} alt='Pic' className='card_img' />
    <div className='card_info'>
      <span className='card_category'>A Netflix Original Series</span>
      <h3 className='card_title'>{props.title}</h3>
      <a href={props.reflink} target="_blank" rel='noreferrer'>
        <button>Watch Now</button>
      </a>
    </div>
  </div>
</div>
  )
}

export default Card
