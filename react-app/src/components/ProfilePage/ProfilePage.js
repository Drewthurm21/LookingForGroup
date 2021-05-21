import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { showModal, setCurrentModal } from '../../store/modal'
import EventCardMain from '../EventCardMain/EventCardMain'
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
      <div className='image-stats'>
        <img className='profile-avatar' src={user.avatars}></img>

      </div>
      <div className='profile-username'>{user.username}</div>
      <div className='post-event-btn' onClick={startEventPost}> POST EVENT</div>
      <div>{user.registrations.length}</div>
      <div className='user-events'>
        {events.map(event => {
          if (user.registrations.includes(event.id)) {
            return <EventCardLong event={event} />
          }
        })}
      </div>
    </div>
  );
}
export default ProfilePage;
