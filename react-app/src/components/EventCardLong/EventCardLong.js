import React from 'react'
import { NavLink } from 'react-router-dom'
import './EventCardLong.css'

const EventCardLong = ({ event }) => {

  const cancelRegistration = () => {

  }

  return (
    <div className='ecl-wrapper'>
      <div className='ecl-inner-card' style={{
        backgroundImage: 'url(' + event.image_url + ')',
        backgroundSize: `cover`
      }}>
        <NavLink className='event-card-link' to={`/events/${event.id}`} >
          <div className='ecl-card-box'>
            <div className='ecl-card-content'>
              <p className='ecl-title'>{event.title}</p>
              <p className='ecl-description'>{event.description}</p>
              <div>{event.date.slice(0, 16)}</div>
            </div>
          </div>
        </NavLink>
        <div onClick={() => console.log("yo")}>Cancel</div>
      </div>
    </div >

  )
}

export default EventCardLong