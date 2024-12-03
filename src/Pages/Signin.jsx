import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  function handleChange(event) {
    if (event.target.id === "userInput") {
      const val = event.target.value;
      setUser(val);
    } else {
      const val = event.target.value;
      setPass(val);
    }
  }

  async function handleClick() {
    console.log(import.meta.env.VITE_APP_SERVER);
    const response = await axios.post(`https://e-notebook-qlrn.onrender.com/user/login`, {
      username: user,
      password: pass,
    });

    if (response.data.success) {
      const id = response.data.data._id;
      localStorage.setItem("currentUser", id);
      navigate("/userNotebook");
      alert("User Logged In Successfully");
    } else {
      alert("Incorrect Credentials or User is not Registered");
    }
  }
  return (
    <div className="signincontainer">
      <div>
        <div>
          <label for="userInput">Username:</label>
          <input
            onChange={handleChange}
            id="userInput"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label for="userPassword">Password:</label>
          <input
            onChange={handleChange}
            id="userPasword"
            type="text"
            placeholder="Password"
          />
        </div>
        <div>
          <button style={{marginTop: 3}} onClick={handleClick}>LogIn</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
