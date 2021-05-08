import React, { useEffect, useState } from 'react'
import './CommentCard.css'
import EditCommentForm from './EditCommentForm'

const CommentCard = ({ comment, user }) => {
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
            <EditCommentForm comment={comment} />
          ) : null}
        </div>
      }
    </>
  )
}

export default CommentCard