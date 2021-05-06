import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EventCardMain from '../EventCardMain/EventCardMain'
import './CategoryCarousel.css'


const CategoryCarousel = () => {

  const events = useSelector(state => state.events.events)

  const [index, setIndex] = useState(0)
  const [index2, setIndex2] = useState(1)
  const [index3, setIndex3] = useState(2)
  const [index4, setIndex4] = useState(3)

  const prevCard = () => {
    setIndex((index) => index ? index - 1 : events.length - 1)
    setIndex2((index) => index ? index - 1 : events.length - 1)
    setIndex3((index) => index ? index - 1 : events.length - 1)
    setIndex4((index) => index ? index - 1 : events.length - 1)
  }

  const nextCard = () => {
    setIndex((index) => index === events.length - 1 ? 0 : index + 1)
    setIndex2((index) => index === events.length - 1 ? 0 : index + 1)
    setIndex3((index) => index === events.length - 1 ? 0 : index + 1)
    setIndex4((index) => index === events.length - 1 ? 0 : index + 1)
  }

  let currentCards;
  if (events) {
    currentCards = [
      <EventCardMain key={'o'} event={events[index]} />,
      <EventCardMain key={'p'} event={events[index2]} />,
      <EventCardMain key={'q'} event={events[index3]} />,
      <EventCardMain key={'r'} event={events[index4]} />
    ]

  }


  return (
    <div className='carousel-wrapper'>
      {events &&
        <div>
          <div className='carousel-cards'>
            <div className='carousel-btn' onClick={prevCard}>{'<==='}</div>
            {currentCards}
            <div className='carousel-btn' onClick={nextCard}>{'===>'}</div>
          </div>
        </div>
      }
    </div>
  )
}

export default CategoryCarousel