import { getOneEvent } from './events'


export const postComment = (content, event_id) => async (dispatch) => {

  const response = await fetch(`/api/comments/`, {
    headers: { "Content-Type": 'application/json' },
    body: JSON.stringify({
      event_id,
      content
    }),
    method: "POST"
  })
  if (response.ok) {
    const data = await response.json();
    await dispatch(getOneEvent(data.event_id))
  }
}

export const editComment = (content, id) => async (dispatch) => {
  const response = await fetch(`/api/comments/${id}`, {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      content,
    }),
    method: "PATCH",
  });

  if (response.ok) {
    const data = await response.json();
    await dispatch(getOneEvent(data.event_id));
  }
};

export const deleteComment = (id) => async (dispatch) => {
  const response = await fetch(`/api/comments/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
  });
  if (response.ok) {
    const data = await response.json();
    await dispatch(getOneEvent(data.event_id));
  }
};
