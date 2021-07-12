import React, { useState, useEffect } from 'react'
import firebase  from "../utils/firebase";

import Nav from "../components/Nav";
import Title from "../components/Title";
import UploadForm from "../components/UploadForm";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";

// import { 
//     makeStyles, 
//     Grid, 
//     TextField, 
//     Card, 
//     CardContent, 
//     Button,
//     CircularProgress,
//     Typography,
//     IconButton,
// } from "@material-ui/core";
// import {Delete as DeleteIcon} from "@material-ui/icons"

// const useStyles = makeStyles(theme=> ({
//     root: {
//         display: "flex",
//         direction: "column",
//         height: "100vh",
//         width: "100vw",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     card: {
//         width: 500,
//     },
//     taskDone: {
//         textDecoration: "line-through",
//     },
// }));

// const db = firebase.firestore();
export default function Home() {
    const [selectedImg, setSelectedImg] = useState(null);
    // const classes = useStyles();
    // const [state, setState] = useState({
    //     tasks: [],
    //     userUid: "",
    //     isLoading: true,
    // });

    // const [payload, setPayload] = useState({
    //     task: "",
    // })

    // useEffect(() => {
    //     const fetchData = () => {

    //         const currentUser = firebase.auth().currentUser;

    //         db.collection("users")
    //         .doc(currentUser.uid)
    //         .collection("tasks")
    //         .orderBy("created_at", "desc")
    //         .onSnapshot((doc) => {
    //             let taskList=[];
    //             doc.forEach((task) => {
    //                 taskList.push({ ...task.data(), id: task.id});
    //             });
                
    //            setState({tasks: taskList,
    //             userUid: currentUser.uid,
    //             isLoading: false
    //         });
    //     })
    // };

    //     fetchData();
    //     }, []);

    // const handleChange = (e) => {
    //     setPayload({task: e.target.value });
    // };

    // const addTask = ()=> {
    //     db.collection("users")
    //     .doc(state.userUid)
    //     .collection("tasks")
    //     .add({ task: payload.task, status: "pending", created_at: new Date() })
    //     .then((docRef) => {
    //         //sucess
    //         setPayload({task: ""});
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // };

    // const toggleTask = (docId, status) => {
        
    //     let updatedStatus;

    //     if (status === "done") {
    //         updatedStatus="pending";
    //     }
    //     else {
    //         updatedStatus="done";
    //     }
    //     db.collection("users")
    //     .doc(state.userUid)
    //     .collection("tasks")
    //     .doc(docId)
    //     .update({status: updatedStatus})
    //     .then((doc) => {
    //         //sucess
    //     })
    //     .catch((err) => {
    //         //errpr
    //     });
    // };

    // const deleteTask = (docId) => {
    //     db.collection("users")
    //     .doc(state.userUid)
    //     .collection("tasks")
    //     .doc(docId)
    //     .delete()
    //     .then(() => {
    //         //success
    //     })
    //     .catch((err) => {
    //         //error
    //     });
    // };
        
    // if (state.isLoading) {
    //     return(
    //     <div className={classes.root}>
    //         <CircularProgress size={160} />
    //     </div>
    //     );
    // }    
    return (
        <div className="App">
            <Nav />
            <Title/>
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
        // <div className="mydiv">
        //     <Nav />

        //     <Grid container direction="column" spacing={2} alignItems="center">
        //         <Grid item className={classes.card}>
        //             <Card>
        //                 <CardContent>
        //                     <Grid container spacing={2} alignItems="center" justify="center">
        //                         <Grid item>
        //                             <TextField 
        //                                 variant="outlined" 
        //                                 label="Task" 
        //                                 value={payload.task} 
        //                                 onChange={handleChange} 
        //                             />
        //                         </Grid>
        //                         <Grid item>
        //                             <Button variant="contained" color="primary" onClick={addTask}>ADD</Button>
        //                         </Grid>
        //                     </Grid>
        //                     <Grid container direction="column">
        //                          {state.tasks.map((task) => (    
        //                             <React.Fragment key={task.id}>
        //                                 <Grid container justify="center" alignItems="center">
        //                                 <Typography 
        //                                     key={task.id} 
        //                                     variant="h6"
        //                                     // component={Button}
        //                                     onClick={() => toggleTask(task.id, task.status)}
        //                                     className={task.status === "done" ? classes.taskDone : null}
        //                                 >
        //                                     {task.task}
        //                                 </Typography>
        //                                 <IconButton onClick={() => deleteTask(task.id)}>
        //                                     <DeleteIcon />
        //                                 </IconButton>
        //                                 </Grid>
        //                             </React.Fragment>
        //                          ))}
                                 
        //                     </Grid>
        //                 </CardContent>
        //             </Card>
        //         </Grid>
        //     </Grid>

        // </div>
    );
    
}