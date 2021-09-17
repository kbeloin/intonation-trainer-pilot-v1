import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import { withRouter, NavLink } from 'react-router-dom';
import Recorder from './Recorder.js'
import Player from './Player.js';
import axios from "axios";
import { Scatter} from 'react-chartjs-2'
import { newChart, updateChart, getData } from './SoundChart.js';

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

const getCSRF = () => {
    try {
    const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='))
        .split('=')[1]
    return token
    } catch (e) {console.log(e)}
}

const uploadFile = (file, s3Data, url) => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url);
    console.log(s3Data)
    var postData = new FormData();
    var fields = s3Data.fields
    console.log(fields)
    Object.entries(s3Data).forEach(([key, value]) => 
    xhr.setRequestHeader(key, value));

    postData.append('file', file);
  
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
        if(xhr.status === 200 || xhr.status === 204){
            var response = JSON.parse(xhr.responseText);
            console.log(response)
        }
        else{
          alert("Could not upload file.");
        }
     }
    };
    console.log(file)
    xhr.send(postData);
  }


const getSignedRequest = (file) => {
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/sign_s3");
    xhr.setRequestHeader("X-CSRFToken", getCSRF());
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
        if(xhr.status === 200){
            var response = JSON.parse(xhr.responseText);
            console.log(response)
            uploadFile(file, response.data, response.url);
        }
        else{
            alert("Could not get signed URL.");
        }
        }
    };
    xhr.send();
    }



const ProdTask = (props) => {
    let [src, setCurrentSrc] = useState()
    let [staged, setStagedData] = useState()
    let [processedData, setProcessedData] = useState(null)
    let [chartA, setChartA] = useState()
    let [chartB, setChartB] = useState()
    const classes = useStyles();
    const responseDataRef = useRef(null);
    const questionDataRef = useRef(null);
    
    

    const handleChange = () => {
        let audio = staged
        
        // document.getElementById("recorder").currentSrc
        setCurrentSrc(staged)     // console.log(src)
    }
    
    const processData = (data) => {
        console.log(staged)
        document.getElementById('responseData').remove()
        const newCanvas = document.createElement('canvas')
        newCanvas.setAttribute('id', 'responseData')
        
        document.getElementById('responseDataContainer').append(newCanvas)

        var xhr = new XMLHttpRequest()
        xhr.open("POST", "/api/process/", true);
        xhr.setRequestHeader("X-CSRFToken", getCSRF());
        //Send the proper header information along with the request
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
    
        
        xhr.onreadystatechange = function() { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                var response = JSON.parse(xhr.responseText);
                newChart(newCanvas, getData(response))
                setProcessedData(response)
                
            }
        }
        
        xhr.send(JSON.stringify(data))
    
    }
    // useEffect(() => {
    //     // Update the document title using the browser API
        
    //     src === undefined ? console.log("None") : processData(src)},[src]);
    
    useEffect(() => {
        // Update the document title using the browser AP
        src === undefined ? console.log("None") : processData(src)},[src]);

    useEffect(() => {
            // Update the document title using the browser API
        
        console.log(processedData)
    },[processedData]);

    useEffect(() => {
        setChartA(newChart(questionDataRef.current, []))
        setChartB(newChart(responseDataRef.current, []))
        // Update the document title using the browser AP
},[]);
    

    
    return (
        <div className={classes.content}>
            <Paper className={classes.paper}>
                <Grid container className={classes.grid}>
                    <Grid item>
                        <Paper className={classes.chart}>  
                            <canvas id="questionData" ref={questionDataRef}></canvas>
                        </Paper>
                        <Player/>
                    </Grid>
                    <Grid item>
                        <Paper id="responseDataContainer" className={classes.chart}>
                            <canvas id="responseData" ref={responseDataRef}></canvas>
                        </Paper>
                        <Recorder sets={setStagedData}/>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={handleChange}>Welcome</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
        );
    }
export default withRouter(ProdTask)
