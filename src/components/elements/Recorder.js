
import { useEffect } from  'react'
import useRecorder from "../utils/useRecorder";
import { Button, Grid } from '@material-ui/core'

const Recorder = (props) => {
  let [audioURL, isRecording, startRecording, stopRecording, rawData] = useRecorder();
  
  useEffect(() => {
    if (rawData) {
      console.log("Raw data ready.")
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