import React from 'react'
import './EventCardMain.css'

const EventCardMain = ({ event }) => {


  return (
    <div className='ecm-wrapper'>
      <div className='ecm-title'>
        {event.title}
      </div>
      <div className='ecm-main-img-wrap'>
        <img className='ecm-main-img' src={event.image_url} />
      </div>
      <div className='ecm-description'>
        {event.description}
      </div>
      <div className='ecm-price'>
        {`$${event.price}`}
      </div>
    </div>

  )
}

export default EventCardMain