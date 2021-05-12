import React, { useEffect, useState } from 'react'
import { getAllEvents } from '../../store/events'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel'
import EventCardMain from '../EventCardMain/EventCardMain'
import './Homepage.css'

const Homepage = () => {
  const dispatch = useDispatch()
  const events = useSelector(state => state.events.events)

  const [category, setCategory] = useState(1)

  useEffect(() => {
    dispatch(getAllEvents())
  }, [dispatch])


  useEffect(() => {

  }, [category])

  return events && (
    <div className='homepage-wrapper'>
      <img className='main-logo' src='https://github.com/Drewthurm21/LookingForGroup/blob/main/images/lfg-controller-logo.png?raw=true' alt='logo'></img>
      <h1 className='carousel'>Feature Events!</h1>
      <CategoryCarousel />
      <img className='main-logo' src='https://github.com/Drewthurm21/LookingForGroup/blob/main/images/lfg-banner-gif.gif?raw=true' alt='logo'></img>
      <div className='sidebar-events'>
        <div className='homepage-sidebar'>
          <div id='1' className='category-btn' onClick={e => setCategory(Number(e.target.id))}>Call of Duty</div>
          <div id='2' className='category-btn' onClick={e => setCategory(Number(e.target.id))}>League of Legends</div>
          <div id='3' className='category-btn' onClick={e => setCategory(Number(e.target.id))}>Minecraft</div>
          <div id='4' className='category-btn' onClick={e => setCategory(Number(e.target.id))}>Valorant</div>
          <div id='5' className='category-btn' onClick={e => setCategory(Number(e.target.id))}>Rocket League</div>
          <div id='6' className='category-btn' onClick={e => setCategory(Number(e.target.id))}>Apex Legends</div>
          <div id='7' className='category-btn' onClick={e => setCategory(Number(e.target.id))}>Among Us</div>
          <div id='8' className='category-btn' onClick={e => setCategory(Number(e.target.id))}>Fortnight</div>
          <div id='9' className='category-btn' onClick={e => setCategory(Number(e.target.id))}>Valheim</div>
          <div id='10' className='category-btn' onClick={e => setCategory(Number(e.target.id))}>Battlefield</div>
        </div>
        <div className='events-wrapper'>
          <div className='events-cards'>{
            events.map(event => event.category_id === category ? <EventCardMain event={event} /> : null)
          }</div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;