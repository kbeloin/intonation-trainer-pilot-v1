
import { useState, useRef } from  'react'
import { render } from "react-dom";
import useRecorder from "./useRecorder";
import axios from "axios";
import { Button, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

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
    
    grid: {
      display:"flex",
        justifyContent:"space-evenly",
        spacing:"2",
        
       
        
    }
}));

const Recorder = (props) => {
  let [audioURL, isRecording, startRecording, stopRecording, rawData] = useRecorder();
  let audioRef = useRef()
  const classes = useStyles();
  const audio = audioRef.current

  // const handlestop = props.sets(rawData)
  
  const currentAudio = audio ? audio.addEventListener('canplaythrough', (event) => {
    if (rawData) {props.sets(rawData)};
    return
  }) : "NONE";

  return (
    <div className="Recorder" id="recorder" ref={props.forwardedRef}>
    <Grid contaimer className={classes.grid}>
    <Button onClick={startRecording} disabled={isRecording}>
        start recording
      </Button>
      <Button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </Button>
      <audio src={audioURL} ref={audioRef} controls/>
      
      </Grid>
      
    </div>
  );
}
export default Recorder;