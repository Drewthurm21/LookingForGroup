import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './CommentCard.css'
import EditCommentForm from './EditCommentForm'

const CommentCard = ({ comment }) => {
  const commentDate = comment.created_at.slice(0, 16)
  const [editing, setEditing] = useState(false);

  const user = useSelector(state => state.session.user)


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
          {comment.user_id === user?.id && <button className='comment-btn' onClick={handleSubmit}>EDIT comment</button>}
          {editing && comment.user_id === user?.id ? (
            <EditCommentForm id={comment.id} />
          ) : null}
        </div>
      }
    </>
  )
}

export default CommentCard