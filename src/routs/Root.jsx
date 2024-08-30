import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import LeftSidebar from '../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../components/RightSidebar/RightSidebar'

function Root() {
  return (
    <>
   <div className="App">
        <div className="container1">
          <LeftSidebar />
          <div className="main-content">
          <Navbar />
          <Outlet />
          </div>
          
          <RightSidebar />
        </div>
      </div>
    </>
    
)
}

export default Root