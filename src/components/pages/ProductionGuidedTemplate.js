import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@mui/material';
import { withRouter, useHistory } from 'react-router-dom';
import Recorder from '../elements/Recorder'
import Player from '../elements/Player';
import { processAudioData, getPitchScatterData } from '../utils/processAudio.js'
import { submitResponse } from '../utils/responseHelper'
import { PitchChart } from '../elements/AudioCharts';
import { getResponses } from '../utils/responseHelper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Icon from '@mui/material/Icon'
import Instructions from "./Instructions"
import remainingAttempts from '../utils/remainingAttempts';
import Backdrop from '@mui/material/Backdrop';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        justifyContent: 'center',
        minWidth: '95vw',
        height: '85vh',
        display:"flex",
        elevation: 3,
        position: 'relative',
        
    },
    container: {
        position: 'relative',
        height: '100%',
        justifyContent: "center"
    },
    grid: {
        height: "50%",
        justifyContent:"space-evenly",
        spacing:"0",
        alignItems:"center",
        direction:"column",
        minHeight:"100%"
    },
    button: {
        position: 'absolute',
        bottom:'50px',
        right: '50px'
    },
    chart: {
        justifyContent:"center",
        alignItems:"center",
        direction:"column",
        minHeight:"275px",
        marginBottom: "1vh",
        minWidth:"30vw",
    }
}));

const ProductionGuidedTemplate = (props) => {
    const classes = useStyles();
    let [processedData, setProcessedData] = useState(null)
    let [value, setValue] = useState("")
    let [attempts, setAttempts] = useState(0)
    let [trial, setTrial] = useState(null)
    let [submitted, isSubmitted] = useState(null)

    let [isLoading, toggleLoading] = useState(false)
    let [correct, showCorrect] = useState(false)
    let [incorrect, showIncorrect] = useState(false)
    let instructionRef = useRef()
    let exampleRef = useRef()

    const sentenceData = ["id", "sentence"]
    let history = useHistory()


    // Essential functionality
    
    const Submit = () => {
        isSubmitted(true)
        if (processedData && value) {
            showCorrect(true)
            
            let request = { "eval": 1, "response": { "pitch": processedData, "input": value }, "response_id": trial.response_id }
            submitResponse(request).then(({ nextTaskId, nextType, nextTrialId, nextResponseId }) => {

            })
            return 
        } else {
            showIncorrect(true)
            let request = { eval: 0, response: "", response_id: trial.response_id }
            submitResponse(request)
        }
    }

    const Next = () => {
        let request = sentenceData
        getResponses(request).then((response) => {
            if (response.data == 'Done') {
                history.push('/done')
            }
                    const data = response.data
                    console.log(data)
                    if (data.task_id != trial.task_id) {
                        console.log("Task completed. Moving to next task")
                        history.push(`/${data.type}`)
                    } else { if (data.trial_id != trial.trial_id) {
                        console.log("Trial completed. Moving to next trial")
                        setTrial(data)
                    } else { if (data.trial_id != trial.trial_id) {
                        console.log("Response submitted. Moving to next attempt in trial set.")
                        setTrial(data)
                            } else {
                                console.log("Something went wrong, and task was not refreshed.")
                            }
                        }
                    }
                })
            }
    

    
    const Evaluate = ({ userResponse, target }) => {
        // Do something, return true or false. There is no target here. 
        if ( target === undefined ) { // Undefined target means no target set
            return true
            } return true 
        }

    // const submitResponse = () => {
    //     if (processedData && value) {
    //         showCorrect(true)
            
    //         let request = { eval: 1, response: {data: processedData}, response_id: trial.response_id }
    //         submitResponse(request)
    //         Next()
    //         return 
    //     } else {
    //         showIncorrect(true)
    //         let request = { eval: 0, response: "", response_id: trial.response_id }
    //         submitResponse(request)
    //     }
    // }
    // Tool setting and binding
    const handleChange = (e) => {
        setValue(e.currentTarget.value)
    }

    const handleClose = () => {
        showIncorrect(false)
    }

    const handleAudioChange = (data) => {
        if (data === undefined) {
            alert("Something went wrong with the recording. Please try again!")
            return
        }
        // Whenever a participant makes a recording.
        const audio = data
        const response_id = trial.response_id
        const requestData = {"audio":audio, "response_id":response_id}
        // let newCanvas = resetCanvas('response-data', 'response-data-container', chartB)
        processAudioData(requestData).then((response) => { 
            let pitchData = getPitchScatterData(response.data)
            setProcessedData(pitchData) // Stages data for submission.
            toggleLoading(false)});
        }

    // Essential functionality

    const Clean = () => {
        showCorrect(false)
        showIncorrect(false)
        isSubmitted(false)
        setAttempts(0)
        setValue('')
        setProcessedData(null)
    }

    
    useEffect( () => {
        getResponses(sentenceData).then((response) => {

            if (response.type === 'Done') {
                history.push('/done')
            } 
            const data = response.data
            setTrial(data)
            instructionRef.current.textContent = data.text.instructions
            exampleRef ? exampleRef.current.textContent = data.text.example_text : console.log("Undefined element")});

    },[]);

    useEffect( () => {
        if (isSubmitted) {
            Clean()
        }

        return 
    },[trial]);

    return (
            <div>
                
                <Paper className={classes.paper}>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
                    <Stack direction="row" justifyContent="flex-start" alignItems="baseline" alignContent="center" spacing={5}>
                <TaskFourInstructions/>
                <Typography alignSelf={'flex-start'} marginRight={'50px'} variant='body1' component="h2" gutterBottom xs={3}>
                    {trial ?  "Question ID: " + trial.trial_id + " | Attempt: " + remainingAttempts(trial.response_id) + " of 3" : null }
                </Typography>
           
                    </Stack>
                    <Typography variant="subtitle1" component="h2" gutterBottom>
                      {trial ? trial.text.instructions_short : "Loading..."} 
                    </Typography>
                                <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}spacing={5}>
                                        <Item>{trial ? trial.sentence.sentence : "Loading..."} </Item>      
                                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={5} xs={6}>
                                  
                
                                        <Stack direction="column">
                                        {isLoading ? 
                                        <Paper id="response-data-container" className={classes.chart} style={{display:"flex", alignContent: "center", alignContent:"center"}}>
                                            <CircularProgress style={{display:"relative"}}/> 
                                        </Paper>
                                        :
                                        <Paper id="response-data-container" className={classes.chart} style={{display:"flex", alignContent: "center", alignContent:"center"}}>
                                            <PitchChart data={processedData}/>
                                        </Paper>}
                                            <Recorder alignSelf="flex-end" sets={(data) => {handleAudioChange(data); toggleLoading(true);} }/>
                                        </Stack>
                                        <Box alignSelf="flex-start"
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                            >
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="What did you do to sound polite?"
                                            multiline
                                            maxRows={4}
                                            value={value}
                                            onChange={handleChange}
                                            variant="filled"
                                            minWidth="300px"
                                            />
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
                            <IconButton aria-label="close" color="error" size="small" onClick={() => {handleClose() }}>
                                <Icon>close</Icon>
                            </IconButton>
                            }
                        severity="error"
                        sx={{ mb: 2 }}
                        >
                        Try again! Remember to explain your intonation choices.
                        </Alert>
                    </Collapse>
                                    </Box>
                                        <Button style={{alignSelf:"flex-end"}} variant="outlined" onClick={() => {Evaluate({userResponse: {"data": processedData, "text": value }, target: trial.target}) ? Submit() : console.log("Failed evaluation. ")}} disabled={ trial ? attempts > trial.attempts : true }> Submit</Button> 
                                        <Button style={{alignSelf:"flex-end"}} variant="outlined" onClick={() => {Next()}} disabled={!submitted}>Next</Button>
                                    </Stack>
                                    
                                </Stack>
                                
                               
                            </Stack>
                            
                    </Paper>
                </div>
        );
    }

export default withRouter(ProductionGuidedTemplate)

export const TaskFourInstructions = () => {
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
        <Paper style={{maxWidth:"1100px", padding:"3%"}}>
        <Box>
                <Stack direction="column">
                
                <Stack direction="row">
                Task 5. Speaking.
                    
                    </Stack>
                    <Stack direction="row">
                    In this last task, you will record yourself saying requests, paying attention to the tone choices and prominence.                    </Stack>
                    <Stack direction="row">
                    Repeat the sentence you see below. Remember to pay attention to your tone choices at the end of the sentence and your prominence (stressed words).

                    </Stack>
                    <Stack direction="row">
                    <b>Tone choices: </b>
                    Remember that falling intonation is more polite and appropriate at the end of a request to a professor or an advisor.
                    
                    <b>Prominence</b> 
                    Remember to only stress contextually important words in the sentence (2-3 words maximum).

                    </Stack>
                    <Stack direction="row">
                    
                    </Stack>
                    <Stack direction="row">
                   
                    </Stack>
                    </Stack>
                </Box>
            </Paper>
      </Backdrop>
        </div>
    )
}