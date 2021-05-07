import React, { useEffect } from 'react'
import { getAllEvents } from '../../store/events'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel'
import './Homepage.css'

const Homepage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllEvents())
  }, [dispatch])


  return (
    <div className='homepage-wrapper'>
      <h1>Looking For Group</h1>
      <div>
        <h2 className='crsl-category'>Apex Legends</h2>
        <CategoryCarousel />
        <h2 className='crsl-category'>Call of Duty</h2>
        <CategoryCarousel />
        <h2 className='crsl-category'>Battlefield</h2>
        <CategoryCarousel />
        <h2 className='crsl-category'>Valorant</h2>
        <CategoryCarousel />
        <h2 className='crsl-category'>Among Us</h2>
        <CategoryCarousel />
        <h2 className='crsl-category'>Fall Guys</h2>
        <CategoryCarousel />
        <h2 className='crsl-category'>Diablo III</h2>
        <CategoryCarousel />
        <h2 className='crsl-category'>Monster Hunter</h2>
        <CategoryCarousel />
        <h2 className='crsl-category'>Valheim</h2>
        <CategoryCarousel />
        <h2 className='crsl-category'>Minecraft</h2>
        <CategoryCarousel />
      </div>
    </div>
  )
}

export default Homepage;