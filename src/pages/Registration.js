import React, { useState } from 'react'
import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";

import firebase from "../utils/firebase";

export default function Registration() {

    const [value, setValue] = useState({
        //username: "",
        email: "",
        fname: "",
        username: "",
        password: "",
        confirmpass: "",
    });

    //const history = useHistory();

    const handleChange = (prop) => (e) => {
        setValue({...value, [prop]: e.target.value });
    };

    const register = (e) => {
        e.preventDefault();

        if (!value.email || !value.fname || !value.username || !value.password || !value.confirmpass){
            alert("Please complete all fields!")
        } else if (value.password !== value.confirmpass){
            alert("Passwords did not match!")
        } else {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
  .then((userCredential) => {
    // Signed in 
    //var user = userCredential.user;
    // ...
    var uname = document.getElementById("username").value;
    alert("Registered and Signed in as " + uname);
    console.log (uname);
  })
  .catch((error) => {
    //var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
        }

    };

    return ( 
        <div id = "container">
        <div id = "signup-container">
            <br/>
            <h1>iNSTAX</h1>
            <br/>
            <p class = "text-top">Sign up to see photos and videos<br/> from your friends.</p><br/>
            <div id = "form-container">
                <input class = "mTxtbox" id = "Email" type = "text" placeholder = "Email"
                value = { value.email } onChange = { handleChange("email") }/> 
                <input class = "mTxtbox" id = "fname" type = "text" placeholder = "Full Name"
                value = { value.fname } onChange = { handleChange("fname") }/>
                <input class = "mTxtbox" id = "username" type = "text" placeholder = "Username"
                value = { value.username } onChange = { handleChange("username") }/>
                <input class = "mTxtbox" id = "pass" type = "password" placeholder = "Password"
                value = { value.password } onChange = { handleChange("password") }/>
                <input class = "mTxtbox" id = "confirmpass" type = "password" placeholder = "Confirm Password"
                value = { value.confirmpass } onChange = { handleChange("confirmpass") }/>
                <br/>
                <button id = "btnReg" onClick = {register}> Sign Up </button> 
                <p class = "text-bot">By signing up, you agree to our <a>Terms</a>, <a>Data</a><br/><a>Policy</a> and <a>Cookies Policy</a>.</p>
            </div>
        </div>
        <div id = "bottom-container">
            <p class = "bottom-text">Have an account? <Link to = "/Signin"> <button id = "mBtnSign"> Sign-in here </button></Link ></p>
        </div>
    </div>
    )
}