import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import Outlet from "./components/Outlet/Outlet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routs/Root";

function App() {
  // const [count, setCount] = useState(0);

  const router = createBrowserRouter([
 
    {
      path: "/",
      element: <Root />,
      // errorElement: <NotFound />, // way for showing error when user write a path outside of the project rand of paths , example: localhost.../register
      children:[
        {
          path: "/",
          element: <Outlet />,
        }
        
      ]
    },
  
  ]);
  return (
    
    <>
      <RouterProvider router={router} />
    </>
    
  );
}

export default App;
