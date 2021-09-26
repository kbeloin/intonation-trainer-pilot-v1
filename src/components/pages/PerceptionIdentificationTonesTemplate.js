import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Player from '../elements/Player';
import Button from '@material-ui/core/Button'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { getResponses, submitResponse } from '../utils/responseHelper';
import { withRouter, useHistory } from 'react-router-dom';
import Icon from '@mui/material/Icon'
import remainingAttempts from '../utils/remainingAttempts'
import Instructions from './Instructions'
import Backdrop from '@mui/material/Backdrop'


const useStyles = makeStyles((theme) => ({
    content: { 
      justifyContent: "center",
      display: "flex"
    },
      paper: {
        padding: theme.spacing(2),
        justifyContent: 'center',
        minWidth: '100vw',
        height: '85vh',
        display:"flex",
        elevation: 3,
        position: 'relative'
        
      },
  }));

  
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  

export const PerceptionIdentificationTonesTemplate = () => {
    const [correct, showCorrect] = useState(false);
    const [incorrect, showIncorrect] = useState(false);
    const [trial, setTrial] = useState(null);
    const sentenceData = ["id","filepath","intonation"]
    const history = useHistory()
    const instructionRef = useRef()

    const classes = useStyles();

    const getResponse = () => {
        showCorrect(false)
        showIncorrect(false)
        getResponses(sentenceData).then((response) => {
            const data = response.data
            setTrial(data)});
    }

    const evaluateTone = (e) => {
        let target = e.currentTarget.value
        if (target === trial.target) {
            showCorrect(true)
            console.log(target)
            let request = { eval: 1, response: target, response_id: trial.response_id }
            submitResponse(request)
            return
        }
        showIncorrect(true)
        let request = { eval: 0, response: target, response_id: trial.response_id }
        submitResponse(request)
    }

    const nextTrial = () => {
        let request = ["id"]
        getResponses(request).then((response) => {
                    const data = response.data
                    if (data.task_id != trial.task_id) {
                        console.log("Task completed. Moving to next task")
                        history.push(`/${data.type}`)
                    }
                    if (data.trial_id != trial.trial_id) {
                        console.log("Trial completed. Moving to next trial")
                        getResponse();
                    } else {
                        setTrial(data)
                    };
                });
            };
            

    useEffect( () => {
        getResponses(sentenceData).then((response) => {
            const data = response.data
            setTrial(data)
        
        })
    },[]);

    return (
        <div>
            
        <Paper className={classes.paper}>
  
              
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
            <Stack direction="row" justifyContent="flex-start" alignItems="baseline" alignContent="center" spacing={5}>
                <TaskOneInstructions/>
                <Typography alignSelf={'flex-start'} marginRight={'50px'} variant='body1' component="h2" gutterBottom xs={3}>
                    {trial ?  "Question ID: " + trial.trial_id + " | Attempt: " + remainingAttempts(trial.response_id) + " of 3" : null }
                </Typography>
           
            </Stack>
                <Typography variant="subtitle1" component="h2" gutterBottom>
                      {!trial ? "Loading..." : trial.text.instructions_short} 
                  </Typography>
                <Player url={trial ? trial.sentence.filepath : null}/>
                <Box style={{width: "100%"}}>
                    <Collapse in={correct}>
                        <Alert
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            >
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                        >
                        Well done! Click next to continue.
                        </Alert>
                    </Collapse>
                    <Collapse in={incorrect}>
                        <Alert
                        action={
                            <IconButton aria-label="close" color="error" size="small" onClick={() => { getResponse()}}>
                                <Icon>close</Icon>
                            </IconButton>
                            }
                        severity="error"
                        sx={{ mb: 2 }}
                        >
                        Try again! Remember to listen to the tone choice at the <u>end</u> of the word.
                        </Alert>
                    </Collapse>
                </Box>
                <Stack direction="row" spacing={18} xs={12}>
                    <Button variant="outlined" size="large" onClick={(e)=> evaluateTone(e)} value="rising" disabled={correct || incorrect}>
                        Rising
                    </Button>
                    <Button variant="outlined" size="large" onClick={(e)=> evaluateTone(e)} value="level" disabled={correct || incorrect}>
                        Level
                    </Button>
                    <Button variant="outlined" size="large" onClick={(e)=> evaluateTone(e)} value="falling" disabled={correct || incorrect}>
                        Falling
                    </Button>
                </Stack>
            </Stack>
            <Button size="large"variant="contained" style={{alignSelf:"flex-end"}} onClick={() =>{nextTrial()}}  disabled={!correct}>Next</Button>
        </Paper>
        </div>
    )
}



export default withRouter(PerceptionIdentificationTonesTemplate);


export const TaskOneInstructions = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(true);

    const handleClose = () => {
      setOpen(false);
    };

    const handleToggle = () => {
      setOpen(!open);
    };
    
    return (
        <div>
            <IconButton aria-label="close" color="info" size="small" onClick={() => handleToggle()}>
                            <Icon>help</Icon>
                        </IconButton>
            <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }}
        open={open}
        onClick={handleClose}
      >
        <Paper style={{maxWidth:"1100px", padding:"3%"}} justifyContent='center'
        minWidth='95vw'
        height= '50vh'
        display='flex'
        elevation={3}
        position='relative'
        >
        <Box>
                <Stack direction="column">
                
                <Stack direction="row">
                    Task 1. Listening.<br />
                    
                    </Stack>
                    <Stack direction="row"><br />
                    In this task, you will listen to requests spoken with different intonations.<br /><br />For each request, you will identify the tone choice AT THE END of the sentence, where the request is happening.
                    </Stack><br />
                    <Stack direction="row"><br />
                    In English, there are three general types of intonation.
                    </Stack><br /><br />
                    <Stack direction="row">
                    <b>Falling</b> = the voice at the end of the request goes down.<br />
                    <b>Rising</b> = the voice at the end of the request goes down.<br />
                    <b>Level</b> = the voice does not go up or down.<br />
                    </Stack>
                    </Stack>
                </Box>
            </Paper>
      </Backdrop>
        </div>
    )
}


