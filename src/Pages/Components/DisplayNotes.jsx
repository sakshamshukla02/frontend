import React from "react";
import axios from "axios"
import { useState } from "react";
import DialogBox from "./DialogBox.jsx";
import "./DisplayNotes.css";

const DislayNotes=({title,description,id,noteUpdate})=>{
    const [dialogBox,setDialogBox]=useState(false);
    function handleUpdate()
    {
        setDialogBox(true);

    }
    async function handleDelete()
    {
        const response=await axios.post(`${import.meta.env.VITE_APP_SERVER}/user/deleteNote`,{
            id:localStorage.getItem("currentUser"),
            contentId:id
        })

        if(response.data.success)
        {
            noteUpdate();
            alert("Deleted Note Successfully");
        }
    }

    function DialogBoxUpdate()
    {
        setDialogBox(false);
    }

    return <div className="notedisplayContainer">
        <div >
            <p>{title}</p>
        </div>
        <div>
            <p>{description}</p>
        </div>
        <div>
            <button onClick={handleUpdate} >Update</button>
            <button onClick={handleDelete} >Delete</button>
        </div>
        {dialogBox && (<DialogBox title={title} description={description} dialogBoxUpdate={DialogBoxUpdate} id={id} noteUpdate={noteUpdate}/>)}
    </div>
}

export default DislayNotes;