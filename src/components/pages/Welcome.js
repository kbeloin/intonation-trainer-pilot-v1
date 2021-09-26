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
import { PitchChart } from '../elements/AudioCharts';
import Recorder from '../elements/Recorder';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
const useStyles = makeStyles((theme) => ({
  content: { 
    justifyContent: "center",
    display: "flex"
  },
    paper: {
      padding: theme.spacing(2),
      
      minWidth: '100vw',
      minHeight: '85vh',
      display:"flex",
      elevation: 3,
      position: 'relative'
      
    },
    container: {
        
    },
}));

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const Welcome = (props) => {
  const [currentTask, setCurrentTask] = useState('/')
  const [newUser, setNewUser] = useState(false)
  const [code, setCode] = useState("")
  const taskRef = useRef()
  const exampleRef = useRef()
  const sentenceData = ["id"]
  const history = useHistory()

  const createTrial = (code) => {
    getResponses(sentenceData).then((response) => {
          console.log("Checking if user exists...")

          const data = response.data
          if (data?.message === 'Next') { // Anon testing purposes
              nextTask()
          }
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
        // When the user selects Enter, experiement begins. 
        // 1. Trial is created
        // 2. Responses are intialize  
      }

  const handleInput = (e) => {
    setCode(e.target.value)
  }

  const nextTask = () => {
    getResponses(sentenceData).then((response) => 
      {
        console.log(response)
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
    getResponses(sentenceData).then((response) => {
      const data = response.data
      console.log(data)
      if (data.type !== undefined) {
          history.push(`/${data.type}`)
        }

    })
    },[])

    return (
      <div>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid container direction="column" justifyContent="center" alignItems="center" >
              <Grid  item xs={12}>
                <Fade in={newUser}>
                  <Typography variant="h1" component="h" gutterBottom>
                  </Typography>
                  </Fade>
              </Grid>
            </Grid>
            <Grid container direction="column" justifyContent="flex-end" alignItems="center" >
              <Grid  item xs={12}>
                  <Typography variant="subtitle1" component="h2" gutterBottom>
                      Welcome<br />
                  </Typography>
                  <Typography variant="subtitle1" component="h2" gutterBottom><br />
                    Welcome to the study investigating English intonation and learning. Before starting, please observe the following requirements:
                    <Stack direction="column" xs={4}> <br />
                    1. Wear a headset with microphone (or make sure your computer has a microphone).
                    </Stack>
                    <Stack direction="column" xs={4}> <br />
                    2. Please open the experiement in Google Chrome. 
                    </Stack>
                    <Stack direction="column" xs={4}> <br />
                    3. You will have three attempts per question; once this number of attempts has been reached, the program will automatically progress.
                    </Stack>
                  </Typography> 
              </Grid>
            </Grid>
            <Grid container direction="column" justifyContent="center" alignItems="center" >
            <Stack direction="row" spacing={6} xs={12}>
            <TextField
        autoFocus
        margin="dense"
        id="code"
        label="Experiment Code"
        
        variant="outlined"
        value={code}
        onChange={handleInput}
            />
            <Button onClick={ () => {createTrial(code)} }> Enter</Button>
                </Stack>
            </Grid>
            </Grid>
            
        </Paper>
        </div>
        );
    }

export default withRouter(Welcome);

