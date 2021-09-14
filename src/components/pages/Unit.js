import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import { withRouter, NavLink } from 'react-router-dom';

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
      display:"flex"
    },
    container: {
        position: 'relative',
        height: '100%'
    },
    button: {
        position: 'absolute',
        bottom:'0',
        right: '0'
    },
    grid: {
        height: "50%"
    }
}));

const Unit = (props) => {
    const classes = useStyles();
  
    return (
      <div className={classes.content}>
        <Paper className={classes.paper} elevation='3' justifyContent="center" alignItems="center">
            <Grid container spacing='0' justifyContent="center" alignItems="center" direction="column" minHeight="100%">
                <figure>
                    <figcaption>Example:</figcaption>
                        <audio
                            controls
                            src="https://intonation-trainer.s3.us-east-2.amazonaws.com/test-audio.mp3">
                                Your browser does not support the
                                <code>audio</code> element.
                        </audio>
                </figure>
            </Grid>
        
            <Container className={classes.container} justifyContent="center">
                <NavLink className={classes.button} to='/' style={{ textDecoration: 'none' }} key= ''>
                    <Button variant="outlined">Welcome</Button>
                </NavLink>
            </Container>
        </Paper>
        </div>
        );
    }
export default withRouter(Unit)
