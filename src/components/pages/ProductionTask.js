import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@mui/material';
import { withRouter, NavLink } from 'react-router-dom';
import Recorder from './Recorder.js'
import Player from './Player.js';
import axios from 'axios';
import { processAudioData } from '../utils/processAudio.js'
import { submitResponse } from '../utils/submitResponse.js'
import { getPitchScatterData, resetCanvas, newCanvas, PitchChart } from './SoundChart.js';
import { getCSRF } from '../utils/csrfHelper'

const useStyles = makeStyles((theme) => ({
  content: {
    justifyContent: "center",
    display: "flex"
  },
    paper: {
        padding: theme.spacing(2),
        flexDirection: "row",
        minWidth: '100vw',
        minHeight: '80vh',
        display:"flex-box",
        elevation: 3,
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
    },

    chart: {
        justifyContent:"space-evenly",
        spacing:"0",
        alignItems:"flex-end",
        direction:"column",
        minHeight:"40%",
        marginBottom: "1vh",
        minWidth:"35vw",
    }
}));

const ProdTask = (props) => {
    const classes = useStyles();
    let [processedData, setProcessedData] = useState({})
    let [taskData, setTaskData] = useState(true)
    let [isLoading, toggleLoading] = useState(false)

    let [chartA, setChartA] = useState()
    let [chartB, setChartB] = useState()

    let responseDataRef = useRef(null);
    let questionDataRef = useRef(null);
    
    let handleAudioChange = (data) => {
        // let newCanvas = resetCanvas('response-data', 'response-data-container', chartB)
        console.log(isLoading)
        processAudioData(data).then((response) => { 
            let pitchData = getPitchScatterData(response.data)
            // setChartB(newPitchChart(newCanvas, pitchData, chartB)) // Destroys chart / resets element
            setProcessedData(pitchData)
            toggleLoading(false)
         })
    }

    let nextTask = () => {

        let response = { 'taskData': taskData, 'responseData': processedData }
        submitResponse()
    }

    useEffect(() => {
        // Update the document title using the browser API (next action... taskType determines the element to show)
        if (processedData === null) { 
            console.log("No changes recorded") 
        } else {
        console.log("Processed data changed:", processedData)}
        
        },[processedData]);

    useEffect(() => {
        // setChartA(newPitchChart(questionDataRef.current, []))
        // setChartB(newPitchChart(responseDataRef.current, []))
    },[]);

    return (
        <div className={classes.content}>
            <Paper className={classes.paper}>
                <Grid container className={classes.grid}>
                    <Grid item>
                        <Paper id="question-data-container" className={classes.chart}>  
                            <PitchChart sets={setChartA} data={[]}/>
                        </Paper>
                        <Player url={"https://intonation-trainer.s3.us-east-2.amazonaws.com/test-audio.mp3"}></Player>
                    </Grid>
                    <Grid item>
                        <Paper id="response-data-container" className={classes.chart}>
                            {isLoading ? <CircularProgress /> : <PitchChart sets={setChartB} data={processedData}/>}
                        </Paper>
                        <Recorder sets={(data) => {handleAudioChange(data); toggleLoading(true);} }/>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => {nextTask();}}>Welcome</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
        );
    }

export default withRouter(ProdTask)
