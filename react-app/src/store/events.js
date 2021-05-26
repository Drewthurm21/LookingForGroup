import { authenticate } from './session'

const SET_EVENTS = 'events/SET_EVENTS'
const SET_USER_EVENTS = 'events/SET_USER_EVENTS'
const SET_EVENT = 'events/SET_EVENT'


const setEvents = (events) => ({
  type: SET_EVENTS,
  payload: events
})

const setUserEvents = (events) => ({
  type: SET_USER_EVENTS,
  payload: events
})


const setEvent = (event) => ({
  type: SET_EVENT,
  payload: event
})


export const getOneEvent = (id) => async (dispatch) => {
  const response = await fetch(`/api/events/${id}`)
  if (response.ok) {
    const event = await response.json()
    dispatch(setEvent(event))
    return true
  }
  return false
}


export const getAllEvents = () => async (dispatch) => {
  const response = await fetch('/api/events')
  const { events } = await response.json()
  dispatch(setEvents(events))
}


export const getUserEvents = (id) => async (dispatch) => {
  const response = await fetch(`/api/events/user/${id}`)
  const events = await response.json()
  console.log(events)
  dispatch(setUserEvents(events))
}


export const postEvent = (image, title, description, date, price, tickets, category, channel, server) => async (dispatch) => {

  const formData = new FormData()
  formData.append('image', image)
  formData.append('title', title)
  formData.append('description', description)
  formData.append('date', date)
  formData.append('price', Number(price))
  formData.append('tickets', Number(tickets))
  formData.append('category_id', Number(category))
  formData.append('channel_id', channel)
  formData.append('server_id', server)

  const response = await fetch('/api/events', { method: "POST", body: formData })
  if (response.ok) {
    const { event } = await response.json()
    // dispatch(authenticate())
    return event
  }
}


const initialState = {
  event: null,
  events: null,
  user_events: null
}


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENT:
      return {
        ...state,
        event: action.payload
      }
    case SET_EVENTS:
      return {
        ...state,
        events: action.payload
      }
    case SET_USER_EVENTS:
      return {
        ...state,
        userEvents: {
          hostedEvents: [...action.payload.hosted_events],
          registeredEvents: [...action.payload.registered_events]
        }
      }
    default:
      return state
  }
}

export default reducer;