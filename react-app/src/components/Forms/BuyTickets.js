import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../store/modal'

const BuyTickets = () => {
  const dispatch = useDispatch()
  const event = useSelector(state => state.events.event)
  const [count, setCount] = useState(1)
  const total = (count * event.price)

  const confirmPurchase = () => {
    console.log('confirm!')
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
    <div className='form'>
      <h1>{event.title}</h1>
      <br></br>
      <h3>{event.description}</h3>
      <br></br>
      <h3>{`$${event.price}`}</h3>
      <br></br>

      <div className='tickets-selector'>
        <div className='tickets-title'>How many tickets would you like?</div>
        <div>{`$${total}`}</div>
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