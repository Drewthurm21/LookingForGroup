import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const EventForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [category, setCategory] = useState(0)
  const [price, setPrice] = useState(0)
  const [date, setDate] = useState()
  const [tickets, setTickets] = useState(50)
  const [server, setServer] = useState('')
  const [channel, setChannel] = useState('')


  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateDescription = (e) => {
    setDescription(e.target.value)
  }

  const updateImage = (e) => {
    setImage(e.target.files[0])
  }

  const updateCategory = (e) => {
    setCategory(e.target.value)
  }

  const updatePrice = (e) => {
    setPrice(e.target.value)
  }

  const updateDate = (e) => {
    setDate(e.target.value)
  }

  const updateTickets = (e) => {
    setTickets(e.target.value)
  }

  const updateServer = (e) => {
    setServer(e.target.value)
  }

  const updateChannel = (e) => {
    setChannel(e.target.value)
  }

  const postEvent = () => {

  }


  return (
    <div className='event-form-wrapper'>
      <div className='page-one'>

      </div>

      <div className='page-one'>

      </div>

      <div className='page-one'>

      </div>

      <div className='page-one'>

      </div>

      <div className='page-one'>

      </div>
    </div>

  )




















}