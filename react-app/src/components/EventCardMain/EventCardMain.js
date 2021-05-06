import React from 'react'
import { NavLink } from 'react-router-dom'
import './EventCardMain.css'

const EventCardMain = ({ event }) => {


  return (
    <div className='ecm-wrapper'>
      <div className='ecm-inner-card'>
        <NavLink className='event-card-link' to={`/events/${event.id}`} >
          <div className='ecm-card-box'>
            <div className='ecm-card-content'>
              <h1 className='ecm-title'>
                {event.title}
              </h1>
              <div className='ecm-main-img-wrap'>
                <img className='ecm-main-img' src={event.image_url} />
              </div>
              <h4 className='ecm-description'>
                {event.description}
              </h4>
            </div>
          </div>
          <h4 className='ecm-price'>
            {`$${event.price}`}
          </h4>
        </NavLink>
      </div>
    </div >

  )
}

export default EventCardMain