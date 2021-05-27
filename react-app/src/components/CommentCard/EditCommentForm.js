import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editComment, deleteComment } from '../../store/comments'

const EditCommentForm = ({ comment, setEditing }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const editCom = async (e) => {
    e.preventDefault();
    dispatch(editComment(content, comment.id))
    setEditing(false)
  };
  const delCom = async (e) => {
    e.preventDefault();
    dispatch(deleteComment(comment.id))
    setEditing(false)
  };


  return (
    <form className='form'>
      <div className="form-inputs">
        <textarea className='textbox' type="text" onChange={(e) => { setContent(e.target.value); }} value={content}></textarea>
      </div>
      <div className="button-div">
        <div onClick={editCom} type="submit">submit</div>
        <div onClick={delCom} type="submit">delete</div>
      </div>
    </form>
  );
};

export default EditCommentForm;
