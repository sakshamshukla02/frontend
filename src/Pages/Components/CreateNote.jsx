import React from "react";
import { useState } from "react";
import axios from "axios";
import "./CreateNote.css"

const CreateNote=({noteUpdate})=>{
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");

    async function handleClick()
    {
        const response=await axios.post(`${import.meta.env.VITE_APP_SERVER}/user/addNote`,{
            id:localStorage.getItem("currentUser"),
            title:title,
            description:description
        })

        if(response.data.success)
        {
            noteUpdate();
            alert("Note Added Successfully")
        }
        else
        {
            alert("Note not Added");
        }
    }
    return <div className="container_Note">
        <div className="titleContainer">
        <label >
            <textarea  placeholder="Title..." onChange={(event)=>{
                setTitle(event.target.value);
            }}>

            </textarea>
        </label>
        </div>
        <div className="descriptionContainer">
        <label >
            <textarea  placeholder="Description..." onChange={(event)=>{
                setDescription(event.target.value);
            }}></textarea>
        </label>
        </div>
        
        <button onClick={(handleClick)}>Add Note</button>
    </div>
}

export default CreateNote;