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
            <div className='carousel-btn' onClick={prevCard}>
              <div className='left-arrow'>
                <div className="container">
                  <div className="content">
                    <svg id="more-arrows">
                      <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
                      <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
                      <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {currentCards}
            <div className='carousel-btn' onClick={nextCard}>
              <div className='right-arrow'>
                <div className="container">
                  <div className="content">
                    <svg id="more-arrows">
                      <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
                      <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
                      <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default CategoryCarousel