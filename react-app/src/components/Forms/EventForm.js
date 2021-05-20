import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../store/modal'
import './Forms.css'

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
  const [page, setPage] = useState(1)

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

  const postEvent = () => {

  }


  return (
    <div className='event-form'>
      <div className='form-header'>Hey {user.username}, Let's post an event!</div>
      <div className="square-1 square"></div>
      <div className="square-2 square"></div>
      <div className="square-3 square"></div>
      <div className="square-4 square"></div>
      <div className="dsquare-1 dsquare"></div>
      {page === 1 &&
        <div className='page-one'>
          <form className='event-form'>
            <div className='page-header'>Let's post an event!</div>
            <div className='event-input'>
              <label htmlFor="Title">Title</label>
              <input className='event-input' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='event-input'>
              <label htmlFor="Description">Description</label>
              <input className='event-input' value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='event-input'>
              <label htmlFor="Photo">Photo</label>
              <input
                name="profile-image"
                type="file"
                placeholder="Select Image"
                accept="image/*"
                onChange={setImage}
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
            <div className='event-btn' onClick={cancelPost}>Cancel</div>
            <div className='event-btn' onClick={nextPage}>Next</div>
          </div>
        </div>
      }
      {page === 2 &&
        <div className='page-two'>
          <div className='page-header'>A little bit more info.</div>
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
            <div className='event-btn' onClick={prevPage}>Back</div>
            <div className='event-btn' onClick={nextPage}>Next</div>
          </div>
        </div>
      }
      {page === 3 &&
        <div className='page-three'>
          <div className='page-header'>Wanna add your Discord Server?</div>
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
            <div className='event-btn' onClick={prevPage}>Back</div>
            <div className='event-btn' onClick={nextPage}>Next</div>
          </div>
        </div>
      }
      {page === 4 &&
        <div className='page-four'>
          <form className='event-form'>
            <div className='event-input' className='page-header'>Did we get this all right?</div>
            <div className='event-input'>Image</div>
            <div className='event-input'>title {title}</div>
            <div className='event-input'>description {description}</div>
            <div className='event-input'>category {category}</div>
            <div className='event-input'>date {date}</div>
            <div className='event-input'>price {price}</div>
            <div className='event-input'>tickets {tickets}</div>
            <div className='event-input'>server {server}</div>
            <div className='event-input'>channel {channel}</div>
            <div className='event-btns'>
              <div className='event-btn' onClick={prevPage}>Back</div>
              <div className='event-btn' onClick={postEvent}>Confirm!</div>
            </div>
          </form>
        </div>
      }
    </div>

  )

}

export default EventForm;