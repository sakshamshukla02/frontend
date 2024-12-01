import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
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
    const response = await axios.post(`${import.meta.env.VITE_APP_SERVER}/user/register`, {
      username: user,
      password: pass,
    });

    if (response.data.success) {
      const id = response.data.data._id;
      localStorage.setItem("currentUser", id);
      alert("User Registered Successfully");
      navigate("/userNotebook");
    } else {
      alert(response.data.message);
    }
  }
  return (
    <div className="signupcontainer">
      <div>
        <div>
          <label for="userInput">Username: </label>
          <input
            onChange={handleChange}
            id="userInput"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label for="userPassword">Password: </label>
          <input
            onChange={handleChange}
            id="userPasword"
            type="text"
            placeholder="Password"
          />
        </div>
        <div>
          <button style={{marginTop: 3}} onClick={handleClick}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
