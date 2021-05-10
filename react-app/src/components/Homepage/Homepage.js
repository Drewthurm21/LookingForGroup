import React, { useEffect } from 'react'
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
      <h1>Looking For Group</h1>
      <img className='main-logo' src='https://github.com/Drewthurm21/LookingForGroup/blob/main/images/main_logo.PNG?raw=true' alt='logo'></img>
      <div className='sidebar-events'>
        <div className='homepage-sidebar'>SIDEBAR
        <div>sidebar</div>
          <div>Apex Legends</div>
        </div>
        <div className='events-wrapper'>
          <h1 className='carousel'>Feature Events!</h1>
          <CategoryCarousel />
          <div className='events-cards'>{
            events.map(event => <EventCardMain event={event} />)
          }</div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;