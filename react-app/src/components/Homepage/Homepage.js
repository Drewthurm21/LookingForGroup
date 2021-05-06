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
      <h1>Looking For Group</h1>
      <div>
        <h2>Apex Legends</h2>
        <CategoryCarousel />
        <h2>Call of Duty</h2>
        <CategoryCarousel />
        <h2>Battlefield</h2>
        <CategoryCarousel />
        <h2>Valorant</h2>
        <CategoryCarousel />
        <h2>Among Us</h2>
        <CategoryCarousel />
        <h2>Fall Guys</h2>
        <CategoryCarousel />
        <h2>Diablo III</h2>
        <CategoryCarousel />
        <h2>Monster Hunter</h2>
        <CategoryCarousel />
        <h2>Valheim</h2>
        <CategoryCarousel />
        <h2>Minecraft</h2>
        <CategoryCarousel />
      </div>
    </div>
  )
}

export default Homepage;