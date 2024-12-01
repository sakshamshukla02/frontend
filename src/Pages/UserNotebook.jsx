import React from "react";
import { useState, useEffect } from "react";
import "./UserNotebook.css";
import axios from "axios";
import DislayNotes from "./Components/DisplayNotes.jsx";
import CreateNote from "./Components/CreateNote.jsx";

const UserNotebook = () => {
    const [note, setNote] = useState([]);
    useEffect(() => {
        fetchNotes();
        async function fetchNotes() {
            console.log("Get Details");
            const response = await axios.post(`${import.meta.env.VITE_APP_SERVER}/user/displayNote`, {
                id: localStorage.getItem("currentUser")
            })
            setNote(response.data.data.content);
        }
    }, [])
    async function changedNote()
    {
        const response = await axios.post(`${import.meta.env.VITE_APP_SERVER}/user/displayNote`, {
            id: localStorage.getItem("currentUser")
        })
        setNote(response.data.data.content);
    }

    function handleNotes(item) {
        return <DislayNotes  key={item._id} id={item._id} title={item.title} description={item.description} noteUpdate={changedNote} />
    }

    return <div className="usernotebookcontainer">
        <div className="navbar"><p>Your Notebook</p></div>
        <div className="noteWriter"><CreateNote noteUpdate={changedNote}/></div>
        <div className="noteContainer">
            {note.map(handleNotes)}
        </div>
    </div>
}

export default UserNotebook;