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
    (async () => {
      const thisEvent = await dispatch(getOneEvent(Number(id)))
      if (thisEvent) {
        setLoaded(true)
      } else {
        return <Redirect to='/' />
      }
    })()

  }, [dispatch, id])

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
        <div className='img-bar'>

          <img className='single-event-img photo' alt='' src={event.image_url}></img>

          <div className='sidebar-wrapper sidebar'>
            <h1>{event.title}</h1>
            <br></br>
            <h2>{event.description}</h2>
            <br></br>
            <h2>{`Tickets cost $${event.price}`}</h2>
            {event.tickets < 10 ? (<h1>This event is almost sold out!</h1>) : (<h3>There are {event.tickets}  tickets left.</h3>)}
            {event.tickets < 10 ? (<h1>There are only {event.tickets} tickets left!</h1>) : null}
            {/* <h3>{`There are ${event.tickets}  tickets left.`}</h3> */}
            <br></br>
            {user && user.registrations.includes(event.id) && <h3>You're all set!</h3>}
            {user && user.registrations.includes(event.id) && <h3 className='registration-btn'
              onClick={buyTickets} >{event.price > 0 ? `Buy More Tickets!` : `Reserve More Seats!`}</h3>}
            {user && !user.registrations.includes(event.id) && <h3 className='registration-btn'
              onClick={buyTickets} >{event.price > 0 ? `Buy Tickets!` : `Register Now!`}</h3>}
          </div>
        </div>

        <div className='comms'>

          <div className='discord-portal discord'>
            {event.server_id && <DiscordPortal server_id={event.server_id} channel_id={event.channel_id} />}
            {!event.server_id && <DiscordPortal />}
          </div>

          <div className='comments-section comment'>
            {user &&
              <div className='post-comment-btn' onClick={handlePost} >
                {!posting && <div>POST A COMMENT</div>}
              </div>}
            {user && posting && <PostCommentForm className='post-comment-form' event={event} setPosting={setPosting} />}
            <div className='comments'>
              {user ? event.comments.map(comment => <CommentCard comment={comment} event={event} user={user} key={comment.id} />).reverse() :
                <img className='main-logo' src='https://github.com/Drewthurm21/LookingForGroup/blob/main/images/lfg-controller-logo.png?raw=true' alt='logo'></img>}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SingleEventPage