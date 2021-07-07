import React, { useState, useEffect } from 'react'
import "./feed.css";
import db from './firestore';
import MeowerBox from './MeowerBox';
import Post from "./Post";



function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return ( 
    <div className = "feed" >
        <div className = "feed_header">
        <  h2 > Home </h2> </div>

        < MeowerBox/>


        {
            posts.map((post) => ( < Post key = { post.text }
                displayName = { post.displayName }
                username = { post.username }
                verified = { post.verified }
                text = { post.text }
                avatar = { post.avatar }
                image = { post.image }/>
            ))
        }

        </div>
    )
}
export default Feed;