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
        display: 'flex',
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
    let [currentTask, setTask] = useState(null)
    let [isLoading, toggleLoading] = useState(false)
    let history = useHistory()
    
    let handleAudioChange = (data) => {
        const audio = data
        const response_id = currentTask.response_id

        const requestData = {"audio":audio, "response_id":response_id}
        // let newCanvas = resetCanvas('response-data', 'response-data-container', chartB)
        processAudioData(requestData).then((response) => { 
            let pitchData = getPitchScatterData(response.data)
            // setChartB(newPitchChart(newCanvas, pitchData, chartB)) // Destroys chart / resets element
            setProcessedData(pitchData)
            toggleLoading(false)
         })
    }
    
    const nextTask = () => {
        let request = { 'response_id': currentTask.response_id, 'responseData': processedData }
        submitResponse(request).then((response) => {
            

                    const data = response.data
                    console.log(data.type);
                    history.push(`/${data.type}`)
                    setTask(data)

                  ;
              })
            }

    useEffect(() => {
        // Update the document title using the browser API (next action... taskType determines the element to show)
        if (processedData === null) {
            
            console.log("No changes recorded") 
        } else {

        console.log("Processed data changed:", processedData)}
        getResponses().then((data)=>
        {
            console.log(data)
            setTask(data.data)
            }
        )


        },[]);

    return (
        <div className={classes.content}>
            <Paper className={classes.paper}>
                <Grid container className={classes.grid}>
                    <Typography>
                        Production
                    </Typography>
                    <Grid item>
                        <Paper id="question-data-container" className={classes.chart}>  
                        { currentTask ? <PitchChart data={getPitchScatterData(currentTask.taskData.audio)}/> : <CircularProgress />}
                        </Paper>
                        <Player url={ currentTask ? currentTask.taskData.files[0].filepath : null}></Player>
                    </Grid>
                        <Grid item>
                            <Paper id="response-data-container" className={classes.chart} >
                                {isLoading ? <CircularProgress /> : <PitchChart data={processedData}/>}
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

export default withRouter(ProductionMatchingTaskTemplate)
