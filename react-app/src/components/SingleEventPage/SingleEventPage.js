import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneEvent } from '../../store/events'
import CommentCard from '../CommentCard/CommentCard'
import DiscordPortal from '../DiscordPortal/DiscordPortal'
import './SingleEventPage.css'

const SingleEventPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const user = useSelector(state => state.session.user)
  const event = useSelector(state => state.events.event)

  useEffect(() => {
    dispatch(getOneEvent(Number(id)))
  }, [dispatch])


  return event && (
    <>
      <h1>{event.title}</h1>
      <div className='img-discord'>
        <img className='sep-main-img' alt='Event-Photo' src={event.image_url}></img>
        <div>
          <DiscordPortal server_id={event.server_id ? event.server_id : "839942777001082941"} />
        </div>
      </div>
      {event && (<div>
        <iframe src={`https://discord.com/widget?id=839942777001082941&theme=dark`} width='350' height='500'
          allowtransparency='true' frameBorder='0' sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'></iframe>
      </div>)}
      <h3>{event.description}</h3>
      <h3>{`$${event.price}`}</h3>
      {/* <div className='event-server'>{eventServer}</div> */}
      <div className='comments'>
        {event.comments.map(comment => <CommentCard comment={comment} user={user} key={comment.id} />).reverse()}
      </div>
    </>
  )
}

export default SingleEventPage