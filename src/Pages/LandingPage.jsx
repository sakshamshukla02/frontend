import React from "react";
import "./LandingPage.css"
import { Link } from "react-router-dom";
import  backgroundImg from"../assets/Images/Designer.jpeg"
const LandingPage=()=>{
    return <div className="component">
        <div>
            <img src={backgroundImg} alt="BackgroundImage" />
        </div>
         <div className="navbar_displaypage">
            <div>
                <Link to="/signup"><button>SignUp</button></Link>
            </div>
            <div>
                <p>/</p>
            </div>
            <div>
                <Link to="/signin"><button>SignIn</button></Link>
            </div>
        </div> 
        <div className="logoName">
            <div>
                <p>E</p>
            </div>
            <div>
                <p>N</p>
            </div>
            <div>
                <p>O</p>
            </div>
            <div>
                <p>T</p>
            </div>
            <div>
                <p>E</p>
            </div>
            <div>
                <p>B</p>
            </div>
            <div>
                <p>O</p>
            </div>
            <div>
                <p>O</p>
            </div>
            <div>
                <p>K</p>
            </div>

        </div>
        <footer>
            Copyright @ 2024 All Rights Reserved
        </footer>
    </div>
}

export default LandingPage;