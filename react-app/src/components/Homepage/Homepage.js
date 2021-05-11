import React, { useEffect, useState } from 'react'
import { getAllEvents } from '../../store/events'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel'
import './Homepage.css'
import EventCardMain from '../EventCardMain/EventCardMain'

const Homepage = () => {
  const dispatch = useDispatch()
  const events = useSelector(state => state.events.events)

  const [category, setCategory] = useState(1)

  useEffect(() => {
    dispatch(getAllEvents())
  }, [dispatch])


  return events && (
    <div className='homepage-wrapper'>
      <img className='main-logo' src='https://github.com/Drewthurm21/LookingForGroup/blob/main/images/main_logo.PNG?raw=true' alt='logo'></img>
      <h1 className='carousel'>Feature Events!</h1>
      <CategoryCarousel />
      <div className='sidebar-events'>
        <div>sidebar</div>
        <div className='homepage-sidebar'>SIDEBAR
          <div>Apex Legends</div>
        </div>
        <div className='events-wrapper'>
          <div className='events-cards'>{
            events.map(event => <EventCardMain event={event} />)
          }</div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;