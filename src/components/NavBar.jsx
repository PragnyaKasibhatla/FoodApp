import * as React from "react";
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Login from "./Login";
import Orders from "./Orders";
function NavBar(){
    return(
        <Router>
        <div className="header">
            <h1>Rail Retro</h1>
            <Link to="./Login">Login</Link>
            <Link to="./Orders">Orders</Link>
        </div>
        <div>
            <Routes>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </div>
        <div>
            <Routes>
            <Route path="/Orders" element={<Orders/>}/>
            </Routes>
        </div>
        </Router>)
}

export default NavBar;