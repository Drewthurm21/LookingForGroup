import React, { useState } from "react";
import { useDispatch } from "react-redux";



const EditCommentForm = ({ id }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const editComment = async (e) => {
    e.preventDefault();
    // write & call edit dispatch here
  };

  const deleteComment = async (id) => {
    // write & call delete dispatch here
  }

  return (
    <div className="ecf-wrapper">
      <div className="ecf-container">
        <form onSubmit={editComment}>
          <div className="form-inputs">
            <label>Edit Comment: </label>
            <input type="text" onChange={(e) => { setContent(e.target.value); }} value={content}></input>
          </div>
          <div class="button-div"><button type="submit">submit</button>
          </div>
        </form>
        <div class="button-div"><button onClick={() => deleteComment(id)}>Delete</button></div>
      </div>
    </div>
  );
};

export default EditCommentForm;
