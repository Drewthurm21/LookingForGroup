import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postEvent } from '../../store/events'
import { hideModal } from '../../store/modal'

import './Forms.css'

const EventForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState(null)
  const [category, setCategory] = useState()
  const [price, setPrice] = useState()
  const [date, setDate] = useState()
  const [tickets, setTickets] = useState()
  const [server, setServer] = useState()
  const [channel, setChannel] = useState()
  const [page, setPage] = useState()
  const [errors, setErrors] = useState([])

  const categories = [
    'Call of Duty',
    'League of Legends',
    'Minecraft',
    'Valorant',
    'Rocket League',
    'Apex Legends',
    'Among Us',
    'Fortnight',
    'Valheim',
    'Battlefield',
  ]

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const nextPage = () => {
    if (page < 4) {
      setPage(page + 1)
    }
  }

  const cancelPost = () => {
    dispatch(hideModal())
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  useEffect(() => {
    let e = []
    if (!title) e.push("Events must have a title")
    if (!date) e.push("Please add a date")
    if (!tickets) e.push("Please add a tickets")
    if (!price) e.push("Please add a price")
    if (!category) e.push("Please add a category")
    if (!description) e.push("Please add a description")
    if (!server) e.push("Please add a server")
    if (!channel) e.push("Please add a channel")
    if (!(server && channel)) e.push("Discord must have both a Server id and a Channel id.")
    setErrors(e)
  }, [title, date, tickets, price, category, description, server, channel, errors])

  // const validateEventPost = () => {
  // if (!title) errors.push("Events must have a title")
  // if (!date) errors.push("Please add a date")
  // if (!tickets) errors.push("Please add a tickets")
  // if (!price) errors.push("Please add a price")
  // if (!category) errors.push("Please add a category")
  // if (!description) errors.push("Please add a description")
  // if (!server) errors.push("Please add a server")
  // if (!channel) errors.push("Please add a channel")
  // if (!(server && channel)) errors.push("Discord must have both a Server id and a Channel id.")

  // }


  const postNewEvent = () => {

    if (errors.length === 0) {
      const formData = new FormData()
      formData.append('image', image)
      formData.append('title', title)
      formData.append('description', description)
      formData.append('date', date)
      formData.append('price', price)
      formData.append('tickets', tickets)
      formData.append('category_id', Number(category))
      formData.append('channel_id', channel)
      formData.append('server_id', server)

      dispatch(postEvent(formData))
    }
  }


  return (
    <div className='event-form'>
      <h2 className='page-header'>Hey {user.username}, Let's post an event!</h2>
      <div className="square-1 square"></div>
      <div className="square-2 square"></div>
      <div className="square-3 square"></div>
      <div className="square-4 square"></div>
      <div className="dsquare-1 dsquare"></div>
      {page === 1 &&
        <>
          <ul>

          </ul>
          <form className='event-form'>
            <div className='event-input'>
              <label htmlFor="Title">Title</label>
              <input className='event-input' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='event-input'>
              <label htmlFor="Description">Description</label>
              <textarea type='textarea' className='event-input' value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='event-input'>
              <label htmlFor="Photo">Photo</label>
              <input
                name="profile-image"
                type="file"
                placeholder="Select Image"
                accept="image/*"
                onChange={updateImage}
                className="signup-input-image"
              ></input>
            </div>
            <div className='event-input'>
              <label htmlFor="Category">Category</label>
              <select className='event-input' value={category} onChange={(e) => setCategory(e.target.value)} >
                <option value={0} disabled>What game are we playing?</option>
                {categories.map((category, i) => (
                  <option value={i + 1} key={i}>{category}</option>
                ))}
              </select>
            </div>
          </form>
          <div className='event-btns'>
            <div className='event-btn1 event-btn' onClick={cancelPost}>Cancel</div>
            <div className='event-btn2 event-btn' onClick={nextPage}>Next</div>
          </div>
        </>
      }
      {page === 2 &&
        <div className='page-two'>
          <h2 className='page-header'>A little bit more info.</h2>
          <form className='event-form'>
            <div className='event-input'>
              <label htmlFor="Date & Time">Date & Time</label>
              <input type='datetime-local' className='event-input' value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='event-input'>
              <label htmlFor="Price">Price</label>
              <input type='number' className='event-input' value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className='event-input'>
              <label htmlFor="Tickets">Tickets</label>
              <input type='number' className='event-input' value={tickets} onChange={(e) => setTickets(e.target.value)} />
            </div>
          </form>
          <div className='event-btns'>
            <div className='event-btn1 event-btn' onClick={prevPage}>Back</div>
            <div className='event-btn2 event-btn' onClick={nextPage}>Next</div>
          </div>
        </div>
      }
      {page === 3 &&
        <div className='page-three'>
          <h2 className='page-header'>Wanna add your Discord Server?</h2>
          <form className='event-form'>
            <div className='event-input'>
              <label htmlFor="Server ID">Server ID</label>
              <input className='event-input' value={server} onChange={(e) => setServer(e.target.value)} />
            </div>
            <div className='event-input'>
              <label htmlFor="Channel ID">Channel ID</label>
              <input className='event-input' value={channel} onChange={(e) => setChannel(e.target.value)} />
            </div>
          </form>
          <div className='event-btns'>
            <div className='event-btn1 event-btn' onClick={prevPage}>Back</div>
            <div className='event-btn2 event-btn' onClick={nextPage}>Next</div>
          </div>
        </div>
      }
      {page === 4 &&
        <div className='page-four'>
          <form className='event-form'>
            <h2 className='event-input page-header'>Did we get this all right?</h2>
            <div className='event-input'>title {title}</div>
            <div className='event-input'>description {description}</div>
            <div className='event-input'>category {categories[category - 1]}</div>
            <div className='event-input'>date {date}</div>
            <div className='event-input'>price {price}</div>
            <div className='event-input'>tickets {tickets}</div>
            <div className='event-input'>server {server}</div>
            <div className='event-input'>channel {channel}</div>
            <div className='event-btns'>
              <div className='event-btn1 event-btn' onClick={prevPage}>Back</div>
              <div className='event-btn2 event-btn' onClick={postNewEvent}>Confirm!</div>
            </div>
          </form>
        </div>
      }
    </div>

  )

}

export default EventForm;