import React, { useState } from 'react';
import { Avatar, Button } from "@material-ui/core";
import "./MeowerBox.css";
import db from './firestore';

export default function Meowerbox() {

    const [meowerMessage, setMeowerMessage] = useState("");
    const [meowerImage, setMeowerImage] = useState("");

    const sendMeower = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Group3",
            userName: "Meower",
            verified: true,
            text: meowerMessage,
            image: meowerImage,
            avatar: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

        })
        setMeowerMessage("")
        setMeowerImage("")

    }
    return (
        < div className="meowerBox" >
            < form >
                <div className="meowerBox_input" >
                    <Avatar src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    < input onChange={
                        (e) => setMeowerMessage(e.target.value)}
                        value={meowerMessage}
                        type="text"
                        placeholder="What is in your mind ?" />
                </div> 
                <input onChange={
                    (e) => setMeowerImage(e.target.value)}
                    value={meowerImage}
                    className="meowerBox_imageInput"
                    placeholder="optional : You can post a image url" />
                < Button onClick={sendMeower}className="meowerBox_meowerButton  " > Post </Button>
            </form>


        </div>

    )
}