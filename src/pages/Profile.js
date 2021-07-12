import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//import TextField from '@material-ui/core/TextField';
import SettingsIcon from '@material-ui/icons/Settings';

import Nav from "../components/Nav";
import { GridOn as GridOnIcon } from "@material-ui/icons";
import firebase from "../utils/firebase";

const useStyles = makeStyles((theme) => ({
    head: {
        paddingTop: theme.spacing(8)
        
    },
  cardGrid: {
    paddingTop: theme.spacing(36),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "190%",
    display: "flex",
    flexDirection: "column",
    background: "#dddcdc",
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}));

const cards = [1, 2, 3];

export default function Profile() {
  const classes = useStyles();

  const [state, setState] = useState ({
    user: null
  })

  useEffect (() => {
    var signedUser = firebase.auth().currentUser;

    if (signedUser) {
      setState({ user: signedUser })
    } else {
      setState (null)
    }
  }, [])

  return (
    <React.Fragment>
        <Nav />
      <main>
        <div class="prof">
            <AccountCircleIcon />

            <Grid container spacing={3}
            direction="row"
            justify="center"
            alignItems="center">
              <h3 class="welcome">{state.user ? state.user.email : "null"}</h3>
              <button>Edit Profile</button>
              <SettingsIcon />
            </Grid>
        </div>
        <div class="post">
        <Grid container direction = "row"
        alignItems="center" justify="center">
            <GridOnIcon />
            <Typography variant="h6">
                POSTS
            </Typography>
        </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}