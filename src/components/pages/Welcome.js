import React, { useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter, NavLink, useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { getResponses } from '../utils/responseHelper';
import axios from 'axios';
import FormDialog from '../elements/FormDialog';
import Fade from '@mui/material/Fade';

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

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const Welcome = (props) => {
  const [currentTask, setCurrentTask] = useState('/')
  const [newUser, setNewUser] = useState(false)
  const taskRef = useRef()
  const history = useHistory()

  const createTrial = (code) => {
axios.get('/api/get-responses/').then((response) => {
      console.log("Checking if user exists...")
      const data = response.data
      if (data === 'None') {
        axios({
          method: "post",
          url: "/api/create-response-set/",
          data: { 'code': code }
        }).then((res) => {
          console.log("Created response set for user.")
          nextTask()
        })
      }})

    nextTask()
    // When the user selects Enter, experiement begins. 
    // 1. Trial is created
    // 2. Responses are intialize  
  }

  const nextTask = () => {
    getResponses().then((response) => 
      {
        const data = response.data
        console.log(data.type);
        history.push(`/${data.type}`)
      // axios.post() // get most recent task
      });
  }
  


  
  // Entry point: 
  const classes = useStyles();

  useEffect(() =>{
    // const nav = taskRef.current.setAttribute('href', '/production-task')
    // console.log(nav)
    // setCurrentTask('/production-task/')
    // console.log('Loaded')
    axios.get('/api/get-responses/').then((response) => {
      const data = response.data
      if (data === 'None') {
        setNewUser(true)
        return
      }
      if (!newUser) {
        history.push(`/${data.type}`)
      }
    })
    }, 
    [])

    return (
      <div className={classes.content}>
        <Paper className={classes.paper}>
            <Grid container className={classes.grid}>
            <Grid item>
              <Fade in={newUser}>
                <Typography variant="h1" component="h2" gutterBottom>
                    Welcome
                </Typography>
                </Fade>
            </Grid>
            <Grid item>
            <Container className={classes.container}>
              {/* <NavLink className={classes.button} ref={taskRef} style={{ textDecoration: 'none' }} key= ''> */}
                <FormDialog onSubmit={createTrial}/>
              {/* </NavLink> */}
            </Container>
            </Grid>
            </Grid>
        </Paper>
        </div>
        );
    }

export default withRouter(Welcome);

