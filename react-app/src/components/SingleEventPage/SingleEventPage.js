import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneEvent } from '../../store/events'
import { showModal, setCurrentModal } from '../../store/modal'
import BuyTickets from '../Forms/BuyTickets'
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
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    if (!posting) return
    const closePost = () => {
      setPosting(false)
    }
    const btn = document.getElementById("submit-comment")
    btn.addEventListener("click", closePost);
    return () => document.removeEventListener("click", closePost)
  }, [posting])

  useEffect(() => {
    (async () => {
      const thisEvent = await dispatch(getOneEvent(Number(id)))
      if (thisEvent) {
        setLoaded(true)
      } else {
        return <Redirect to='/' />
      }
    })()

  }, [dispatch])

  const handlePost = () => {
    setPosting(true)
  }

  const buyTickets = () => {
    dispatch(setCurrentModal(BuyTickets))
    dispatch(showModal())
  }

  if (!loaded) return null

  return (
    <>
      <div className='event-page-wrapper'>

        <h1>WELCOME</h1>
        <div className='image-sidebar'>
          <img className='single-event-img' alt='Event-Photo' src={event.image_url}></img>
          <div className='sidebar-wrapper'>
            <h1>{event.title}</h1>
            <br></br>
            <h3>{event.description}</h3>
            <br></br>
            <h3>{`$${event.price}`}</h3>
            <br></br>
            <h3 className='registration-btn' onClick={buyTickets} >{event.price > 0 ? `Buy Tickets!` : `Register Now!`}</h3>
          </div>
        </div>
        <div className='comms-div'>
          <div className='discord-portal'>
            {event.server_id && <DiscordPortal server_id={event.server_id} channel_id={event.channel_id} />}
          </div>
          <div className='comments-section'>
            {user &&
              <div className='post-comment-btn' onClick={handlePost} >
                {!posting && <div>POST A COMMENT</div>}
              </div>}
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