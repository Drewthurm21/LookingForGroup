import React, { useEffect } from 'react'
import { getAllEvents } from '../../store/events'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel'


const Homepage = () => {
  const dispatch = useDispatch()
  const events = useSelector(state => state.events)

  useEffect(() => {
    dispatch(getAllEvents())

  }, [dispatch])


  return (
    <div className='homepage-wrapper'>
      <h1>HOME PAGE MANNNNNN</h1>
      <CategoryCarousel />
      <CategoryCarousel />
    </div>
  )
}

export default Homepage;