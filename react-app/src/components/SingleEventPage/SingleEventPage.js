import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneEvent } from '../../store/events'
import CommentCard from '../CommentCard/CommentCard'
import DiscordPortal from '../DiscordPortal/DiscordPortal'
const SingleEventPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const event = useSelector(state => state.events.event)

  useEffect(() => {
    dispatch(getOneEvent(Number(id)))
  }, [dispatch])


  return event && (
    <>
      <h1>{event.title}</h1>
      <img className='sep-main-img' src={event.image_url}></img>
      <h1>{event.description}</h1>
      <h3>{`$${event.price}`}</h3>
      <div></div>
      <div>
        <iframe src="https://discord.com/widget?id=839942777001082941&theme=dark" width="850" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
      <div className='comments'>
        {event.comments.map(comment => <CommentCard comment={comment} key={comment.id} />)}
      </div>
    </>
  )
}

export default SingleEventPage