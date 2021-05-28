import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postEvent } from '../../store/events'
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
  const [date, setDate] = useState('')
  const [tickets, setTickets] = useState(0)
  const [server, setServer] = useState('')
  const [channel, setChannel] = useState('')
  const [page, setPage] = useState(1)
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
    if (!title) e.push("Events must have a title.")
    if (!date) e.push("Please add a date.")
    if (!tickets) e.push("Please set the number of tickets.")
    if (price) e.push("Please select the price of tickets.")
    if (!category) e.push("Please add a category.")
    if (!description) e.push("Please add a description.")
    if ((!server && channel || server && !channel)) e.push("Discord must have both a Server id and a Channel id.")
    setErrors(e)
  }, [title, date, tickets, price, category, description, server, channel])


  const postNewEvent = () => {
    if (errors.length === 0) {
      dispatch(postEvent(
        image, title, description, date, price, tickets, category, channel, server
      ))
      setPage(5)
    }
  }


  return (
    <div className='event-form'>
      <div className="square-1 square"></div>
      <div className="square-2 square"></div>
      <div className="square-3 square"></div>
      <div className="square-4 square"></div>
      <div className="dsquare-1 dsquare"></div>
      {page === 1 &&
        <>
          <h2 className='page-header'>Hey {user.username}, Let's post an event!</h2>
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
                className="signup-input"
              ></input>
            </div>
            <div className='event-input'>
              <label htmlFor="Category">Category</label>
              <select className='event-input' value={category} onChange={(e) => setCategory(e.target.value)} >
                <option value={0} disabled>What game are we playing?</option>
                {categories.map((category, i) => (
                  <option className='event-input' value={i + 1} key={i}>{category}</option>
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
      {page === 4 && errors.length > 0 &&
        <div>
          <ul>
            {errors.map(error => (
              <>
                <div>
                  <li key={error}>{error}</li>
                </div>
                <br></br>
              </>
            ))}
          </ul>
          <div className='event-btns'>
            <div className='event-btn1 event-btn' onClick={prevPage}>Back</div>
          </div>
        </div>
      }
      {page === 4 && errors.length === 0 &&
        <div className='page-four'>
          <form className='event-form'>
            <h2 className='event-input page-header'>Did we get this all right?</h2>
            <div className='event-input'>Title {title}</div>
            <div className='event-input'>Description {description}</div>
            <div className='event-input'>Category {categories[category - 1]}</div>
            <div className='event-input'>Date {String(new Date(date))}</div>
            <div className='event-input'>Price {price ? price : 'This is a free event!'}</div>
            <div className='event-input'>Tickets {tickets ? tickets : 'No maximum number of participants.'}</div>
            <div className='event-input'>Server {server ? server : 'No server submitted.'}</div>
            <div className='event-input'>Channel {channel ? channel : 'No channel submitted'}</div>
            <div className='event-btn1 event-btn' onClick={prevPage}>Back</div>
            <div className='event-btns'>
              <div className='event-btn1 event-btn' onClick={prevPage}>Back</div>
              <div className='event-btn2 event-btn' onClick={postNewEvent}>Confirm!</div>
            </div>
          </form>
        </div>
      }
      {page === 5 &&
        <div className='page-four'>
          <form className='event-form'>
            <h2 className='event-input page-header'>Event Confirmed!</h2>
            <h3 className='event-input page-header'>Here are the event details...</h3>
            <div className='event-input'>Title {title}</div>
            <div className='event-input'>Description {description}</div>
            <div className='event-input'>Category {categories[category - 1]}</div>
            <div className='event-input'>Date {String(new Date(date))}</div>
            <div className='event-input'>Price {price ? price : 'This is a free event!'}</div>
            <div className='event-input'>Tickets {tickets ? tickets : 'No maximum number of participants.'}</div>
            <div className='event-input'>Server {server ? server : 'No server submitted.'}</div>
            <div className='event-input'>Channel {channel ? channel : 'No channel submitted'}</div>
            <div className='event-btns'>
              <div className='event-btn2 event-btn' onClick={cancelPost}>Close</div>
            </div>
          </form>
        </div>
      }
    </div>

  )

}

export default EventForm;