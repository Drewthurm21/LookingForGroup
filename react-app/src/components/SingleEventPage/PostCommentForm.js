import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment } from '../../store/comments'

const PostCommentForm = ({ event }) => {
  const dispatch = useDispatch();


  const [content, setContent] = useState("");


  const postCom = async (e) => {
    e.preventDefault();
    // console.log(content)
    dispatch(postComment(content, event.id))
  };


  return (
    <div className="ecf-wrapper">
      <div className="ecf-container">
        <form className='form'>
          <div className="form-inputs">
            <label>Edit Comment: </label>
            <textarea className='textbox' type="text" onChange={(e) => { setContent(e.target.value); }} value={content}></textarea>
          </div>
          <div className="button-div">
            <div onClick={postCom} type="submit">submit</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostCommentForm;
