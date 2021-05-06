import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneEvent } from '../../store/events'

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

    </>
  )
}

export default SingleEventPage