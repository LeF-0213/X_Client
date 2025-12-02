import React, { useState } from "react";

const EditPostForm = ({ post, onUpdate, onClose }) => {
  const [text, setText] = useState(post.text);

  const onSubmit = async (event) => {
    event.preventDefault();
    onUpdate(post._id, text);
    onClose();
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form className="edit-post-form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="포스트를 수정하세요."
        value={text}
        required
        autoFocus
        onChange={onChange}
        className="from-input post-input"
      />
      <div className="edit-post-form-action">
        <button type="submit" className="form-btn-update">
          EDIT
        </button>
        <button type="button" className="form-btn-cancel" onClick={onClose}>
          CANCLE
        </button>
      </div>
    </form>
  );
};

export default EditPostForm;
