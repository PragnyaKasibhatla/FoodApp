import React, { useState } from "react";
import axios from "axios";
function Login(){
    const [user,setUser] = useState({
        username:"",
        password:""
    });
    const [users,setUsers] = useState([]);
    function handleChange(event){
       const name = event.target.name;
       const value = event.target.value
        setUser(prevNote => {
            return {
              ...prevNote,
              [name]: value
            };});
    }
    const handleSubmit = async e => {
        e.preventDefault();
        // send the username and password to the server
        const response = await axios.post(
          "./Login",
          user
        );
        // set the state of the user
        setUser(response.data)
        // store the user in localStorage
        localStorage.setItem('user', response.data)
        console.log(response.data)
      };

    // function addUser(event){
    //     console.log(user);
    //     setUsers(prevNotes => {
    //         return [...prevNotes,user];
    //       });
    //       console.log(users);
    //     event.preventDefault();
    // }

    
    return (
        <div className="container">
            <h1>Hello {user.username}!</h1>
            <form className="form">
                <input type="text" placeholder="Username/Email" onChange={handleChange} name="username" />
                <input type="password" placeholder="Password" onChange={handleChange} name="password"/>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
}

export default Login;