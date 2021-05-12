import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import EventCardMain from '../EventCardMain/EventCardMain'


function ProfilePage() {

  const user = useSelector(state => state.session.user)
  const events = useSelector(state => state.events.events)

  return user && events && (
    <div className='profile-page-wrapper'>
      <div>{user.username}</div>
      <img src={user.avatars}></img>
      <div>{user.registrations.length}</div>
      <div className='user-events'>
        {events.map(event => {
          if (user.registrations.includes(event.id)) {
            return <EventCardMain event={event} />
          }
        })}
      </div>
    </div>
  );
}
export default ProfilePage;
