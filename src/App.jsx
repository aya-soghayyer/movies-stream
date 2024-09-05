import "./App.css";
import Outlet from "./components/Outlet/Outlet";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Navbar from "./components/Navbar/Navbar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {

  
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
      </div></>
    
  
  );
}

export default App;
