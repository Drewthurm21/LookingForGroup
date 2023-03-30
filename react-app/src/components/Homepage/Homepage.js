import React, { useEffect, useState } from 'react'
import { getAllEvents } from '../../store/events'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel'
import EventCardMain from '../EventCardMain/EventCardMain'
import NavBar from '../NavBar/NavBar';
import './Homepage.css'
let categoryNames = [
  'Call of Duty',
  'League of Legends',
  'Minecraft',
  'Valorant',
  'Rocket League',
  'Apex Legends',
  'Among Us',
  'Fortnight',
  'Valheim',
  'Battlefield'
]

const Homepage = () => {
  const dispatch = useDispatch()
  const events = useSelector(state => state.events.events)
  const user = useSelector(state => state.session.user)
  const [category, setCategory] = useState(1)

  useEffect(() => {
    dispatch(getAllEvents())
  }, [dispatch])


  useEffect(() => {

  }, [category])

  let handleCategoryChange = (e) => {
    setCategory(+e.target.id)
  }
  let categoriesList = categoryNames.map((c, i) => (
    <div id={i + 1} className='category-btn' onClick={handleCategoryChange}>{c}</div>
  ))

  return events && (
    <div className='homepage-wrapper'>
      <img className='main-logo' src='https://github.com/Drewthurm21/LookingForGroup/blob/main/images/lfg-banner-gif.gif?raw=true' alt='logo'></img>
      <h1 className='carousel'>Feature Events!</h1>
      <CategoryCarousel />
      {user &&
        <>
          <img className='main-logo' src='https://github.com/Drewthurm21/LookingForGroup/blob/main/images/socialcasualsimple.PNG?raw=true' alt='logo'></img>
          <div className='sidebar-events'>
            <div className='homepage-sidebar'>
              {categoriesList}
            </div>
            <div className='events-wrapper'>
              <div className='events-cards'>{
                events.map(event => event.category_id === category ? <EventCardMain event={event} key={event.id} /> : null)
              }</div>
            </div>
          </div>
        </>}
    </div>
  )
}

export default Homepage;