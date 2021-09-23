import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Icon from '@mui/material/Icon'


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
        minHeight:"40%",
        marginBottom: "1vh",
        minWidth:"35vw",
    }
}));

const ProductionMatchingTaskTemplate = (props) => {
    const classes = useStyles();
    let [processedData, setProcessedData] = useState(null)

    let [trial, setTrial] = useState(null)
    let [isLoading, toggleLoading] = useState(false)
    let [correct, showCorrect] = useState(false)
    let [incorrect, showIncorrect] = useState(false)
    const sentenceData = ["id","filepath","pitch"]

    let history = useHistory()

    const getResponse = () => {
        showCorrect(false)
        showIncorrect(false)
        getResponses(sentenceData).then((response) => {
            const data = response.data
            setTrial(data)});
    }

    
    let handleAudioChange = (data) => {
        const audio = data
        const response_id = trial.response_id

        const requestData = {"audio":audio, "response_id":response_id}
        // let newCanvas = resetCanvas('response-data', 'response-data-container', chartB)
        processAudioData(requestData).then((response) => { 
            let pitchData = getPitchScatterData(response.data)
            // setChartB(newPitchChart(newCanvas, pitchData, chartB)) // Destroys chart / resets element
            setProcessedData(pitchData)
            toggleLoading(false)});
        }

    const evaluate = () => {
        
        if (processedData) {
            showCorrect(true)
            
            let request = { eval: 1, response: {data: processedData}, response_id: trial.response_id }
            submitResponse(request)
            return
            
            
        } else {

        showIncorrect(true)
        let request = { eval: 0, response: "", response_id: trial.response_id }
        submitResponse(request)
        }
    }
    const nextTrial = () => {
        let request = ["id"]
        getResponses(request).then((response) => {
                    const data = response.data
                    console.log(data)
                    if (data.task_id != trial.task_id) {
                        console.log("Task completed. Moving to next task")
                        history.push(`/${data.type}`)
                    }
                    if (data.trial_id != trial.trial_id) {
                        console.log("Trial completed. Moving to next trial")
                        getResponse()
                    }

                    else {
                        setTrial(data)
                    }
              })
            }

    useEffect(() => {
        // Update the document title using the browser API (next action... trialType determines the element to show)
        if (processedData === null) {
            getResponses(sentenceData).then((data)=>setTrial(data.data))
        } else {
            console.log("Processed data changed:", processedData)
            getResponses(sentenceData).then((data)=> { trial.trial_id !== data.data.trial_id ? setTrial(): setTrial(data.data)});
        }},[processedData]);

    return (
        <div>
            <Paper className={classes.paper}>
            
                
                <Typography marginRight={'50px'} variant="subtitle1" component="h2" gutterBottom>
                   {trial ? "TRIAL " + trial.trial_id + " : " + trial.response_id : "Loading" }
                </Typography> 
           
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
                <Typography marginRight={'50px'} variant="body1" component="h1" gutterBottom>
                      {trial ? trial.text.instructions_short : "Loading..."} 
                  </Typography>
                  <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={5}>
                  <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
                        <Paper id="question-data-container" className={classes.chart}>  
                        { trial ? <PitchChart data={getPitchScatterData(trial.sentence.pitch)}/> : <CircularProgress />}
                        </Paper>
                        <Player url={ trial ? trial.sentence.filepath : null}></Player>
                    </Stack>
                    <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
                             
                            <Paper id="response-data-container" className={classes.chart} style={{width:'100%', height:'100%'}}>
                                {isLoading ? <CircularProgress /> : <PitchChart data={processedData}/>}
                            </Paper>
                            <Recorder sets={(data) => {handleAudioChange(data); toggleLoading(true);} }/>
                        </Stack>
                    </Stack>
                    </Stack>
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
                            <IconButton aria-label="close" color="error" size="small" onClick={() => { showIncorrect(false)}}>
                                <Icon>close</Icon>
                            </IconButton>
                            }
                        severity="error"
                        sx={{ mb: 2 }}
                        >
                        Something went wrong with the audio recording! Please try again.
                        </Alert>
                        </Collapse>
                    </Box>
                    <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={5}>
                        
               <Button className={classes.button} variant="outlined" onClick={() => {evaluate();}}>Next</Button>
            </Stack>
                
            </Paper>
        </div>
        );
    }

export default withRouter(ProductionMatchingTaskTemplate)
