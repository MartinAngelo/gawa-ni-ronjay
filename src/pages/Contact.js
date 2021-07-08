import React from 'react'
import Nav from "../components/Nav";

export default function Contact() {
    return (
        <div>
            <div>
                <Nav/>
            </div>
            <h1>Contact Us</h1>
        <div id = "div2">
        <textarea class = "mTxtbox"  type = "text" placeholder = "Concern"/> 
        <br/>
        <textarea class = "mTxtbox"  type = "text" placeholder = "Suggestions"/>
        <br/>
        <input class = "mTxtbox"  type = "text" placeholder = "Email"/>
        <br/>
        <input class = "mTxtbox"  type = "number" placeholder = "Contact Number"/>
        <br/>
        <br/>
        <button id = "btnReg"> Submit </button> 
        </div>
        </div>
    )
}
