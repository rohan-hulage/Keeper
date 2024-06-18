import React from "react";
import { FaTrash } from "react-icons/fa";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <form>
        <input 
          onChange={props.handleChange}
          value={props.title}
          name="title"
        />
        <textarea
          onChange={props.handleChange}
          value={props.content}
          name="content"
          rows="3"
        />
        <button className="btn" type="button" onClick={handleClick}>
          <FaTrash />
        </button>
      </form>
    </div>
  );
}

export default Note;