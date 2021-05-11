import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../store/modal'
import { authenticate } from '../../store/session'

const BuyTickets = () => {
  const dispatch = useDispatch()
  const event = useSelector(state => state.events.event)
  const [count, setCount] = useState(1)
  const total = (count * event.price)

  const confirmPurchase = async () => {
    await fetch(`/api/registrations/add/${event.id}`)
    dispatch(authenticate())
    dispatch(hideModal())
  }

  const delTicket = () => {
    setCount(count ? count - 1 : 0)
    console.log(total)
  }

  const addTicket = () => {
    setCount(count + 1)
    console.log(total)
  }

  return (
    <div className='login_form'>
      <div className="square_1 square"></div>
      <div className="square_2 square"></div>
      <div className="square_3 square"></div>
      <div className="square_4 square"></div>
      <div className="square_5 square"></div>
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
          <div className='del-ticket' onClick={delTicket}>--</div>
          <div className='ticket-count'>{count}</div>
          <div className='add-ticket' onClick={addTicket}>++</div>
        </div>
      </div>
      <div className='confirm-btn' onClick={confirmPurchase}>CONFIRM PURCHASE</div>
    </div>
  )

}

export default BuyTickets