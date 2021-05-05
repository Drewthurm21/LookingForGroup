import React from 'react'
import { useSelector } from 'react-redux'
import EventCardMain from '../EventCardMain/EventCardMain'
import './CategoryCarousel.css'


const CategoryCarousel = () => {

  const events = useSelector(state => state.events.events)


  return (
    <div className='carousel-wrapper'>
      {events &&
        events.map(event => <EventCardMain event={event} />)}
    </div>
  )
}

export default CategoryCarousel