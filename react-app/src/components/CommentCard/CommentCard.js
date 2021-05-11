import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './CommentCard.css'
import EditCommentForm from './EditCommentForm'
import { deleteComment } from '../../store/comments'

const CommentCard = ({ event, comment, user }) => {
  const dispatch = useDispatch()
  const commentDate = comment.created_at.slice(0, 16)
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!editing) return;

    const closeShown = () => {
      setEditing(false);
    };

    document.addEventListener("submit", closeShown);
    return () => document.removeEventListener("submit", closeShown)
  }, [editing]);

  const handleSubmit = () => {
    setEditing(true);
  };

  const deleteCom = async () => {
    dispatch(deleteComment(comment.id))
    setEditing(false)
  }

  return (
    <>
      {
        <div className="comment-wrapper">
          <div className="top">
            <p className="name">{comment.username}</p>
            {commentDate}
          </div>
          <div className="comment-content">
            <p>{comment.content}</p>
          </div>
          {comment.user_id === user?.id &&
            <div className='edit-btn' onClick={handleSubmit}>[ EDIT ]</div>}
          {editing && comment.user_id === user?.id ? (
            <EditCommentForm comment={comment} setEditing={setEditing} />
          ) : null}
          {user.id === event.host_id &&
            <div className="button-div">
              <div onClick={deleteCom}>Delete</div>
            </div>}
        </div>
      }
    </>
  )
}

export default CommentCard