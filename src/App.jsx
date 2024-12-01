import "./App.css";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import LandingPage from "./Pages/LandingPage.jsx"
import Signup from "./Pages/Signup.jsx";
import Signin from "./Pages/Signin.jsx";
import UserNotebook from "./Pages/UserNotebook.jsx";

const router=createBrowserRouter([
  {
    path:"/",
    element:<LandingPage/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/signin",
    element:<Signin/>
  },
  {
    path:"/userNotebook",
    element:<UserNotebook/>
  },

],
  {
    future: {
      v7_startTransition: true, 
    }
})

function App() {
  return (
     <RouterProvider router={router}/>
  );
}
export default App;
