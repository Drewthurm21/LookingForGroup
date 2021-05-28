import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { showModal, setCurrentModal } from '../../store/modal'
import { getUserEvents } from '../../store/events'
import EventCardLong from '../EventCardLong/EventCardLong'
import EventForm from '../Forms/EventForm'
import './ProfilePage.css'

function ProfilePage() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const user_events = useSelector(state => state.events.user_events)
  const [loaded, setLoaded] = useState(false)

  const startEventPost = () => {
    dispatch(setCurrentModal(EventForm))
    dispatch(showModal())
  }

  useEffect(() => {
    dispatch(getUserEvents(user.id))
  }, [loaded])


  return user && user_events && (
    <div className='profile-page-wrapper'>
      <img className='profile-avatar photo' src={user.avatars} alt=''></img>
      <div className='profile-sidebar stats'>
        <div className='sidebar-wrapper sidebar'>
          <h1>Welcome {user.username}</h1>
          <br></br>
          <h3></h3>
          <br></br>
          <br></br>

          <div className='post-event-btn' onClick={startEventPost}> POST EVENT</div>
        </div>
      </div>
      <div className='user-events attend'>
        <div className='hosting'>
          <h2>You're registered for {user_events.registeredEvents.length} events!</h2>
        </div>
        <br></br>
        {user_events.registeredEvents.map(event => <EventCardLong event={event} key={event.id} />)}
      </div>
      <div className='user-events host'>
        <div className='hosting'>
          <h2>{`You're hosting ${user_events.hostedEvents.length} upcoming events`}</h2>
        </div>
        <br></br>
        {user_events.hostedEvents.map(event => <EventCardLong event={event} key={event.id} />)}
      </div>
    </div>
  );
}
export default ProfilePage;
