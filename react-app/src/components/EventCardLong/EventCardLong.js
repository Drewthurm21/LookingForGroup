import React from 'react'
import { NavLink } from 'react-router-dom'
import './EventCardLong.css'

const EventCardLong = ({ event }) => {


  return (
    <div className='ecm-wrapper'>
      <div className='ecm-inner-card'>
        <NavLink className='event-card-link' to={`/events/${event.id}`} >
          <div className='ecm-card-box'>
            <div className='ecm-card-content'>
              <div className='ecm-Long-img-wrap'>
                <img className='ecm-Long-img' src={event.image_url} />
              </div>
              <p className='ecm-title'>
                {event.title}
              </p>
              <div>{event.date.slice(0, 16)}</div>
            </div>
          </div>
          <h4 className='ecm-price'>{`$${event.price}`}</h4>
        </NavLink>
      </div>
    </div >

  )
}

export default EventCardLong