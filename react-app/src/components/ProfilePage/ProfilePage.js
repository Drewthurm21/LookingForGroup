import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { showModal, setCurrentModal } from '../../store/modal'
import EventCardLong from '../EventCardLong/EventCardLong'
import EventForm from '../Forms/EventForm'
import './ProfilePage.css'

function ProfilePage() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const events = useSelector(state => state.events.events)

  const startEventPost = () => {
    dispatch(setCurrentModal(EventForm))
    dispatch(showModal())
  }

  return user && events && (
    <div className='profile-page-wrapper'>
      <img className='profile-avatar photo' src={user.avatars} alt=''></img>
      <div className='profile-sidebar stats'>
        <div className='sidebar-username'>{user.username}</div>
        <div>STATS</div>
        <div className='post-event-btn' onClick={startEventPost}> POST EVENT</div>
      </div>
      <div>{user.registrations.length}</div>
      <div className='user-events attend'>
        {events.map(event => {
          if (user.registrations.includes(event.id)) {
            return <EventCardLong event={event} key={event.id} />
          }
          return null
        })}

      </div>
      <div className='user-events host'>
        {events.map(event => user.id === event.host_id ? <EventCardLong event={event} key={event.id} /> : null)}
      </div>
    </div>
  );
}
export default ProfilePage;
