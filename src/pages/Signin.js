import React, { useState } from 'react'
import { Link } from "react-router-dom";

import firebase from "../utils/firebase"

export default function Signin() {
    const [value, setValue] = useState({
        email: "",
        password: "",
    });

    //const history = useHistory();

    const handleChange = (prop) => (e) => {
        setValue({...value, [prop]: e.target.value });
    };

    const login = (e) => {
        e.preventDefault();

        if (!value.email || !value.password){
            alert("Please complete all fields!")
        } else {
            firebase.auth().signInWithEmailAndPassword(value.email, value.password)
            .then((userCredential) => {
            // Signed in
            //var user = userCredential.user;
             // ...
             alert("Signed in")
  })
            .catch((error) => {
             //var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
  });
        }

        /*if (value.email === "zodiac@gmail.com" && value.password === "password") {
            alert("Successfully Logged In")
            history.push("/home");
        } else {
            alert("Login Failed");
        }*/
    };

    return ( 
        <div id = "container">
            <div id = "login-container">
            {/* <div id = "div3"> */}
                <br/>
                <h1> iNSTAX </h1> 
                <br/>
                <div id = "form-container">
                <input class = "mTxtbox" name = "email" type = "text" placeholder = "Email"
                value = { value.email } onChange = { handleChange("email") }/>
                <input class = "mTxtbox" name = "password" type = "password" placeholder = "Password"
                value = { value.password } onChange = { handleChange("password") }/>
                <br/>
                <button id = "btnReg" onClick = {login} > Sign In </button>
                <br/>
                <p class = "forgot">Forgot Password?</p>
            {/* </div>  */}
                </div>
            </div>
            <div id = "bottom-container2">
            <p class = "bottom-text">Don't have an account? <Link to="/registration"> <button id = "mBtnLog">Sign-up here</button></Link></p>
            </div>
        </div>
    )
}