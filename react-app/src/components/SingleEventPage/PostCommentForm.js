import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment } from '../../store/comments'
import './SingleEventPage.css'

const PostCommentForm = ({ event }) => {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");


  const postCom = async (e) => {
    e.preventDefault();
    // console.log(content)
    dispatch(postComment(content, event.id))

  };


  return (

    <form className='post-comment-form'>
      <p>Edit Comment: </p>
      <div className="form-inputs">
        <textarea className='textbox' type="text" onChange={(e) => { setContent(e.target.value); }} value={content}></textarea>
      </div>
      <div className="button-div">
        <div onClick={postCom} type="submit">submit</div>
      </div>
    </form>
  );
};

export default PostCommentForm;
