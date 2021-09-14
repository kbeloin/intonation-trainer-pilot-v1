import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import { withRouter, NavLink } from 'react-router-dom';
import Recorder from './Recorder.js'
import Player from './Player.js';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  content: {
    justifyContent: "center",
    display: "flex"
  },
    paper: {
        padding: theme.spacing(2),
        flexDirection: "column",
        minWidth: '100vw',
        minHeight: '80vh',
        display:"flex",
        elevation: 3,
        justifyContent:"center",
        alignItems:"center"
    },
    container: {
        position: 'relative',
        height: '100%',
        justifyContent: "center"
    },
    button: {
        position: 'absolute',
        bottom:'0',
        right: '0'
    },
    grid: {
        height: "50%",
        justifyContent:"space-evenly",
        spacing:"0",
        alignItems:"flex-end",
        direction:"column",
        minHeight:"100%"
    }
}));

const ProdTask = (props) => {
    const classes = useStyles();
  
    return (
      <div className={classes.content}>
        <Paper className={classes.paper}>
            <Container className={classes.container}>
                <Grid container className={classes.grid}>
                    <Player />
                    <Recorder />
                </Grid>
                    <NavLink className={classes.button} to='/' style={{ textDecoration: 'none' }} key= ''>
                        <Button variant="outlined">Welcome</Button>
                    </NavLink>
            </Container>
        </Paper>
        </div>
        );
    }
export default withRouter(ProdTask)
