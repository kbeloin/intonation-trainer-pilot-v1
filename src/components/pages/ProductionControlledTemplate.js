import React, { useState, useEffect, useRef } from 'react';
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
import remainingAttempts from '../utils/remainingAttempts';
import Instructions from './Instructions';



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
        minHeight:"100%",
        marginBottom: "1vh",
        minWidth:"30vw",
    }
}));

const ProductionControlledTemplate = (props) => {
    const classes = useStyles();
    let [processedData, setProcessedData] = useState(null)

    let [trial, setTrial] = useState(null)
    let [isLoading, toggleLoading] = useState(false)
    let [correct, showCorrect] = useState(false)
    let [incorrect, showIncorrect] = useState(false)
    let sentenceData = ["id","filepath","pitch"]
    let instructionRef = useRef()
    let exampleRef = useRef()
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
            evaluate()
        }

    const evaluate = () => {
        
        if (processedData) {
            showCorrect(true)
            
            let request = { eval: 1, response: {data: processedData}, response_id: trial.response_id }
            submitResponse(request)
            nextTrial()
            return
        } else {

        showIncorrect(true)
        let request = { eval: 0, response: "", response_id: trial.response_id }
        submitResponse(request)
        }
    }
    const nextTrial = () => {
        let request = sentenceData
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

    useEffect( () => {
        getResponses(sentenceData).then((response) => {
            const data = response.data
            setTrial(data)
            instructionRef.current.textContent = data.text.instructions
            exampleRef.current.textContent = data.text.example_ref
        });
    },[]);

    return (
            <div>
                <Stack direction="row" justifyContent="flex-start" alignItems="baseline" alignContent="center" spacing={5}>
                <Instructions childExampleRef={exampleRef} childInstructionRef={instructionRef}/>
                <Typography alignSelf={'flex-start'} marginRight={'50px'} variant='body1' component="h2" gutterBottom xs={3}>
                    {trial ?  "Question: " + trial.trial_id + " | Attempts: " + remainingAttempts(trial.response_id) : null }
                </Typography> 
                </Stack>
                <Paper className={classes.paper}>
                    
                    <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
                        <Typography marginRight={'50px'} variant="body1" component="h1" gutterBottom>
                            {trial ? trial.text.instructions_short : "Loading..."} 
                        </Typography>
                        <Stack direction="column"  spacing={5}>
                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={5} xs={6}>
                                { trial ? 
                                <Paper id="question-data-container" className={classes.chart}>  
                                    <PitchChart data={getPitchScatterData(trial.sentence.pitch)}/> 
                                </Paper>
                                :
                                <Paper id="response-data-container" className={classes.chart}>
                                    <CircularProgress/> 
                                </Paper>}
                                {isLoading ? 
                                <Paper id="response-data-container" className={classes.chart}>
                                    <CircularProgress/> 
                                </Paper>
                                :   
                                <Paper id="response-data-container" className={classes.chart}>
                                    <PitchChart data={processedData}/>
                                </Paper>}
                                </Stack>
                                <Stack direction="row" spacing={22} xs={12}>
                                    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" alignContent="flex-start"spacing={15} xs={12}> 
                                        <Player url={ trial ? trial.sentence.filepath : null}></Player>
                                    </Stack>
                                        <Stack direction="column" justifyContent="flex-end" alignItems="flex-end" alignContent="flex-end"spacing={12} xs={6}> 
                                            <Recorder alignSelf="flex-end" sets={(data) => {handleAudioChange(data); toggleLoading(true);} }/>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={5}>    
                    <Button className={classes.button} variant="outlined" onClick={() => {nextTrial()}}>Next</Button>
                </Stack>
            </Paper>
        </div>
        );
    }

export default withRouter(ProductionControlledTemplate)

