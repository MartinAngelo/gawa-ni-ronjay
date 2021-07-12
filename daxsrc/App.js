import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "./Signup.css";
import Forgot from "./pages/Forgot";
import Registration from "./pages/Registration";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Explore from "./pages/Explore";
import Favorite from "./pages/Favorite";
import Profile from "./pages/Profile";

import firebase from "./utils/firebase";
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";

import { ThemeProvider } from "@material-ui/core"
import theme from "./utils/theme";

function App() {
    const [value, setValue] = useState({
        isAuth: false,
        isLoading: true
    })

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user){
            if (user) {
                setValue({isAuth: true, isLoading: false})
            } else {
                setValue({isAuth: false, isLoading: false})
            }
        });
    }, []);

    if (value.isLoading){
        return <p class="load">Loading...</p>
    }

    return ( 
    <ThemeProvider theme={theme}>
      <Router >
        <Switch >
            <Route path = "/" exact >
                <Redirect to = "/signin" />
            </Route> 

            <PublicRoute component = { Registration } isAuth={value.isAuth} restricted={true} path = "/registration" exact />
            <PublicRoute component = { Signin } isAuth={value.isAuth} restricted={true} path = "/signin" exact />

            <PrivateRoute component = { Home } isAuth={value.isAuth} path = "/home" exact />

            <PrivateRoute component = { Message } isAuth={value.isAuth} path = "/message" exact />
            <PrivateRoute component = { Explore } isAuth={value.isAuth} path = "/explore" exact />
            <PrivateRoute component = { Favorite } isAuth={value.isAuth} path = "/favorite" exact />
            <PrivateRoute component = { Profile } isAuth={value.isAuth} path = "/profile" exact />
            <PrivateRoute component = { Forgot } isAuth={value.isAuth} path = "/forgot" exact />

        </Switch> 
      </Router>
    
    </ThemeProvider>
   );
}

export default App;