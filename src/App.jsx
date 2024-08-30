import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <table >
          <tr>
            <td rowSpan={2}>
              {" "}
              <LeftSidebar />
            </td>
            <td>
              {" "}
              <Navbar />
            </td>
            <td rowSpan={2}>sfsdf</td>
          </tr>
          <tr>
            <td>sdfsdf</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
