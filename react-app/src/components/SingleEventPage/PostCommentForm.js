import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment } from '../../store/comments'
import './SingleEventPage.css'

const PostCommentForm = ({ event, setPosting }) => {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");


  const postCom = async (e) => {
    dispatch(postComment(content, event.id))
    setPosting(false)
  };


  return (
    <div className='comment-form-wrapper'>
      <form className='post-comment-form'>
        <p>Edit Comment: </p>
        <div className="form-inputs">
          <textarea className='textbox' type="text"
            onChange={(e) => { setContent(e.target.value); }}
            value={content}></textarea>
        </div>
        <div className="button-div">
          <div onClick={postCom} id="submit-comment">submit</div>
        </div>
      </form>
    </div>
  );
};

export default PostCommentForm;
