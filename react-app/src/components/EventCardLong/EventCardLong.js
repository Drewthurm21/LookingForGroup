import React from 'react'
import { NavLink } from 'react-router-dom'
import './EventCardLong.css'

const EventCardLong = ({ event }) => {


  return (
    <div className='ecl-wrapper'>
      <div className='ecl-inner-card'>
        <NavLink className='event-card-link' to={`/events/${event.id}`} >
          <div className='ecl-card-box'>
            <div className='ecl-card-content'>
              <div className='ecl-Long-img-wrap'>
                <img className='ecl-Long-img' src={event.image_url} />
              </div>
              <p className='ecl-title'>
                {event.title}
              </p>
              <div>{event.date.slice(0, 16)}</div>
            </div>
          </div>
          <h4 className='ecl-price'>{`$${event.price}`}</h4>
        </NavLink>
      </div>
    </div >

  )
}

export default EventCardLong