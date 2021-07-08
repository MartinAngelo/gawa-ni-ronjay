import React from 'react'
import firebase from "../utils/firebase";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

import { Home as HomeIcon } from "@material-ui/icons";
import { Send as SendIcon } from "@material-ui/icons";
import { Explore as ExploreIcon } from "@material-ui/icons";
import { Favorite as FavoriteIcon } from "@material-ui/icons";
import { AccountCircle as AccountCircleIcon } from "@material-ui/icons";

export default function Nav() {

    const logout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return ( 
        <nav class = "navigator">
            <img  class="logo" src={logo} alt="" />
            <label class = "name">iNSTAX</label>
            <input class = "search" placeholder = "Search" />
            
                <ul class="a">
                    <li class = "home"> < Link to = "/home"> <HomeIcon /> </Link>{" "}</li>
                    <li class = "message"> < Link to = "/message"> <SendIcon /> </Link>{" "}</li>
                    <li class = "explore"> < Link to = "/explore" > <ExploreIcon /> </Link>{" "}</li>
                    <li class = "favorite"> < Link to = "/favorite" > <FavoriteIcon /> </Link>{" "}</li>
                    <li class = "profile"> < Link to = "/profile" > <AccountCircleIcon /> </Link>{" "}</li>
                    <li class = "button"> <button class = "navButton" onClick={logout}Logout>logout</button></li>
                </ul> 
            
        </nav> 
    )
}