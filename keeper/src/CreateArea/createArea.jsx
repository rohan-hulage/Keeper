import React from "react";
import { FaPlus } from "react-icons/fa6";

function CreateArea(props) {

  return (
    <div>
      <form>
        <input 
            onChange={e => props.handleChange(e)}
            value={props.note.title} 
            name="title" 
            placeholder="Title" 
        />
        <textarea 
            onChange={e => props.handleChange(e)} 
            value={props.note.content} 
            name="content" 
            placeholder="Take a note..." 
            
        />

        <button className="btn" onClick={props.onSubmit}><FaPlus />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;