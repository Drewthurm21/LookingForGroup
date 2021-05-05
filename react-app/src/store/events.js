
const SET_EVENTS = 'events/SET_EVENTS'

const setEvents = (events) => ({
  type: SET_EVENTS,
  payload: events
})





export const getAllEvents = () => async (dispatch) => {
  const response = await fetch('/api/events')
  const events = await response.json()
  dispatch(setEvents(events))
}

export const reducer = (state = { events: null }, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        events: action.payload
      }
    default:
      return state
  }
}

export default reducer;