
import { useState, useRef, useEffect } from  'react'
import { render } from "react-dom";
import useRecorder from "../utils/useRecorder";
import axios from "axios";
import { Button, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const Recorder = (props) => {
  let [audioURL, isRecording, startRecording, stopRecording, rawData] = useRecorder();
  
  useEffect(() => {
    if (rawData) {
      props.sets(rawData)
    } else console.log("No current audio.");
  }, [rawData])

  return (
    <div className="Recorder" id="recorder" ref={props.forwardedRef}>
    <Grid container>
      <audio src={audioURL} controls/>
      <Button onClick={startRecording} disabled={isRecording}>
        start
      </Button>
      <Button onClick={stopRecording} disabled={!isRecording}>
        stop
      </Button>
      </Grid> 
    </div>
  );
}
export default Recorder;