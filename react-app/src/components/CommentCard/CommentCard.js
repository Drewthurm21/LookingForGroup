import React from 'react'

const CommentCard = ({ comment }) => {


  return (
    <div className='comment-wrapper'>
      <div className='comment-content'>{comment.content}</div>
    </div>
  )
}

export default CommentCard