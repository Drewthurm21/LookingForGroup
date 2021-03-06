import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../store/modal'
import { getOneEvent } from '../../store/events'

const BuyTickets = () => {
  const dispatch = useDispatch()
  const event = useSelector(state => state.events.event)
  const [count, setCount] = useState(1)
  const total = (count * event.price)

  const confirmPurchase = async () => {
    const formData = new FormData()
    formData.append('tickets', count)
    formData.append('event_id', event.id)

    const registration = await fetch(`/api/registrations`, { method: "POST", body: formData })
    if (registration.ok) {
      dispatch(getOneEvent(event.id))
      dispatch(hideModal())
      return
    }

  }

  const delTicket = () => {
    setCount(count ? count - 1 : 0)
  }

  const addTicket = () => {
    setCount(count + 1)
  }

  return (
    <div className='login-form'>
      <div className="square-1 square"></div>
      <div className="square-2 square"></div>
      <div className="square-4 square"></div>
      <h1>{event.title}</h1>
      <br></br>
      <h3>{event.description}</h3>
      <br></br>
      <h3>{`$${event.price}`}</h3>
      <br></br>
      <div className='tickets-selector'>
        <div className='tickets-title'>How many tickets would you like?</div>
        <div>{`$${total.toFixed(2)}`}</div>
        <div className='select-tickets'>
          <div className='tickets-btn' onClick={delTicket}>--</div>
          <div className='tickets-btn'>{count}</div>
          <div className='tickets-btn' onClick={addTicket}>++</div>
        </div>
      </div>
      <div className='confirm-btn' onClick={confirmPurchase}>CONFIRM PURCHASE</div>
    </div>
  )

}

export default BuyTickets