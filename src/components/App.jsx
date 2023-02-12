import NavBar from "./NavBar";
import Nav from "./nav.js";
import Routetable from "../Routes";
import RestoDashboard from "./RestoDashboard";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <NavBar/> */}
      <Routetable />
    </div>
  );
}

export default App;
