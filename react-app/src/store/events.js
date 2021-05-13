
const SET_EVENTS = 'events/SET_EVENTS'
const SET_EVENT = 'events/SET_EVENT'

const setEvents = (events) => ({
  type: SET_EVENTS,
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
  const events = await response.json()
  dispatch(setEvents(events))
}

const initialState = {
  event: null,
  events: null,
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
    default:
      return state
  }
}

export default reducer;