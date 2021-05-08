import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneEvent } from '../../store/events'
import CommentCard from '../CommentCard/CommentCard'
import DiscordPortal from '../DiscordPortal/DiscordPortal'
import PostCommentForm from './PostCommentForm'
import './SingleEventPage.css'

const SingleEventPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const user = useSelector(state => state.session.user)
  const event = useSelector(state => state.events.event)
  const [posting, setPosting] = useState(false)

  useEffect(() => {
    if (!posting) return

    const closeShown = () => {
      setPosting(false)
    }

    document.addEventListener("submit", closeShown);
    return () => document.removeEventListener("submit", closeShown)
  }, [posting])

  useEffect(() => {
    dispatch(getOneEvent(Number(id)))
  }, [dispatch])

  const handlePost = () => {
    setPosting(true)
  }

  return event && (
    <>
      <div className='event-page-wrapper'>

        <h1>{event.title}</h1>
        <div className='image-sidebar'>
          <img className='single-event-img' alt='Event-Photo' src={event.image_url}></img>
          <div className='sidebar-wrapper'>
            <h1>SIDEBAR</h1>
            <h3>{event.description}</h3>
            <h3>{`$${event.price}`}</h3>
          </div>
        </div>
        <div className='comms-div'>
          <div className='discord-portal'>
            {event.server_id && <DiscordPortal server_id={event.server_id} channel_id={event.channel_id} />}
          </div>
          <div className='comments-section'>
            {user && <div className='post-comment-btn' onClick={handlePost} >POST A COMMENT</div>}
            {user && posting && <PostCommentForm className='post-comment-form' event={event} />}
            <div className='comments'>
              {event.comments.map(comment => <CommentCard comment={comment} user={user} key={comment.id} />).reverse()}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleEventPage