import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withRouter, NavLink} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import PerceptionTaskTemplate from './PerceptiontionTask' 
import PerceptionTaskTemplate from './ProductiontionTask' 

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
        justifyContent:"center",
        spacing:"0",
        alignItems:"center",
        direction:"column",
        minHeight:"100%"
    }
}));


const Welcome = (props) => {

  const CreateTrial = (props) => {

    // When the user selects Enter, experiement begins. 
    // 1. Trial is created
    // 2. Responses are intialized
    
  }
  
  // Entry point: 
    const classes = useStyles();
  
    return (
      <div className={classes.content}>
        <Paper className={classes.paper}>
            <Grid container className={classes.grid}>
                <Typography variant="h1" component="h2" gutterBottom>
                    Welcome
                </Typography>
            </Grid>
            <Container className={classes.container}>
              <NavLink className={classes.button} to='/production-task' style={{ textDecoration: 'none' }} key= ''>
                <Button variant="outlined">Enter</Button>
              </NavLink>
            </Container>
        </Paper>
        </div>
        );
    }

export default withRouter(Welcome);

