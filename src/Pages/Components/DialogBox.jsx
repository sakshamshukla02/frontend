import React from "react";
import { useState } from "react";
import axios from "axios";
import "./DialogBox.css";

const DialogBox = ({ title, description,id,noteUpdate,dialogBoxUpdate }) => {
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);

  async function handleClick() {
    const response = await axios.post(`${import.meta.env.VITE_APP_SERVER}/user/updateNote`, {
      id: localStorage.getItem("currentUser"),
      contentId: id,
      title: newTitle,
      description: newDescription,
    });

    if(response.data.success)
    {
        noteUpdate();
        alert("Note Updated Successfully");

    }
    else
    {
        alert("Note Not Updated");
    }
  }

  function handleCancel()
  {
    dialogBoxUpdate();
  }


  return (
    <div className="dialogBoxContainer">
      <div>
        <p id="editNote">Edit Note</p>
      </div>
      <label>
        Title:
        <input
          type="text"
          value={newTitle}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </label>
      <label>
        Description:
        <textarea
          value={newDescription}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
      </label>
      <div>
        <button id="button1" onClick={handleClick}>Update</button>
        <button id="button2" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DialogBox;
