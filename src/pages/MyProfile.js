import React, { useState, useEffect } from "react";
import moment from "moment";
import Navigation from "../pages/Navigation";
import clsx from "clsx";
import firebase from "../utils/firebase";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Card,
    CardContent,
    Grid,
    Divider,
    List,
    IconButton,
    CardActions,
    Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";

import ProfileModal from "../components/modals/ProfileModal";
const drawerWidth = 240;
const db = firebase.firestore();

const signout = () => {

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        marginBottom: 2,
    },
    divider: {
        marginTop: 1,
        marginBottom: 1,
    },
    cardField: {
        marginLeft: 40,
        marginRight: 40,
    },
    input: {
        display: "none",
    },
    centerDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    smallIcon: {
        fontSize: 12
    },
    nameDisplay: {
        fontStyle: "italic",
        fontWeight: "bold"
    }
}));
export default function Home() {
    const currentUser = firebase.auth().currentUser;
    const [postCount, setPostCount] = useState(0);
    const classes = useStyles();
    const [userPosts, setPosts] = useState({
        posts: null,
    });
    const [userLikes, setLikes] = useState({
        likes: null,
    });



    const [profileModal, setProfileModal] = useState(false)
    const [profile, getProfile] = useState({
        userName: "",
        displayName: "",
        ageDesc: "",

        displayPicture: ""
    });
    const deletePost = (id) => {

        db.collection("posts")
            .doc(id)
            .delete();
    };
    const checkLike = (postID) => {
        let test = false;
        userLikes.likes && userLikes.likes.map((likes) => {
            if (likes.postLiked === postID) {
                test = true;
            }
        })
        return test;
    }
    const likePost = (id) => {
        if (checkLike(id) === true) {
            db.collection("posts")
                .doc(id)
                .update({
                    likes: -1
                });
            db.collection("users")
                .doc(currentUser.uid)
                .collection("likes")
                .doc(id)
                .delete();
        } else {
            db.collection("posts")
                .doc(id)
                .update({
                    likes: +1
                });
            db.collection("users")
                .doc(currentUser.uid)
                .collection("likes")
                .doc(id)
                .set({
                    postLiked: id,
                })
        }
    }

    useEffect(() => {
        let abortController = new AbortController();
        const fetchData = () => {
            const currentUser = firebase.auth().currentUser;
            db.collection("posts")
                .orderBy("date_posted")
                .onSnapshot((snapshot) => {
                    let posts = [];
                    snapshot.forEach((doc) => {
                        if (doc.data().userID === currentUser.uid) {
                            posts.unshift({ ...doc.data(), id: doc.id });
                        }
                    });
                    setPosts({ posts: posts });
                    setPostCount(posts.length);
                });
            db.collection("users")
                .doc(currentUser.uid)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        getProfile({
                            userName: "@" + doc.data().username,
                            displayName: doc.data().firstName + " " + doc.data().lastName,

                            bioDesc: "" + doc.data().ageDesc + " ",
                            displayPicture: doc.data().profilePic
                        });
                    }

                })
                .catch((err) => {
                    console.log(err);
                });
            db.collection("users").doc(currentUser.uid)
                .collection("likes")
                .onSnapshot((snapshot) => {
                    let likes = [];
                    snapshot.forEach((doc) => {
                        likes.unshift({ ...doc.data(), id: doc.id });
                    });
                    setLikes({ likes: likes });
                });
        };


        fetchData();
        return () => {
            setPosts({ posts: null });
            abortController.abort();
        };
    }, []);

    return (
        <div>
            <Navigation />
            <main>


                <div
                    className={clsx(classes.content, {
                        [classes.contentShift]: true,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <Card variant="outlined" id="cardMyProfile">
                        <CardContent>

                            <div className={classes.leftDiv}>
                                <Typography variant="h5">
                                    Full Name: {profile.displayName}
                                </Typography>
                            </div>


                            <div className={classes.leftDiv}>
                                <Typography variant="h5">
                                    UserName:  {profile.userName}
                                </Typography>
                            </div>
                            <div className={classes.leftDiv}>
                                <Typography variant="h5" >
                                    Age:  {profile.bioDesc}Years old
                                </Typography>
                            </div>
                            <div className={classes.leftDiv}>
                                <Typography variant="h5">
                                    Post/s:  {postCount}
                                </Typography>
                            </div>


                            <div id="socialInfo">
                                <Button
                                    id="editProfile"
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    disableElevation
                                    onClick={() => setProfileModal(true)}
                                >
                                    Edit Profile
                                </Button>

                                <Button
                                    id="editProfile"
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    disableElevation
                                    onClick={() => signout(true)}
                                >
                                    Sign out
                                </Button>

                            </div>

                        </CardContent>
                    </Card>
                    <List>
                        {userPosts.posts &&
                            userPosts.posts.map((posts) => {
                                return (
                                    <Card
                                        variant="outlined"
                                        id="cardField"
                                        elevation={1}
                                        key={posts.id}
                                    >
                                        <Grid container wrap="nowrap" spacing={2}>

                                            <Grid item xs zeroMinWidth>
                                                <div id="thisPost">
                                                    <Typography id="postDN" variant="subtitle1">
                                                        {profile.displayName}
                                                    </Typography>

                                                </div>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle2">
                                                    {moment(posts.date_posted).fromNow()}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container wrap="nowrap" spacing={2}>
                                            <Grid item xs zeroMinWidth>
                                                <Typography>{posts.postContent}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Divider className={classes.divider} />
                                        <CardActions disableSpacing>

                                            <IconButton
                                                color={checkLike(posts.id) === true ? "primary" : "default"}
                                                className={classes.button}
                                                onClick={() => likePost(posts.id)}
                                            >
                                                <FavoriteIcon />
                                                <Typography> {posts.likes}</Typography>
                                            </IconButton>
                                            <IconButton
                                                className={classes.button}
                                                onClick={() => deletePost(posts.id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                );
                            })}
                    </List>
                </div>
                <ProfileModal open={profileModal} setOpen={setProfileModal} />
            </main>
        </div>
    );
}
