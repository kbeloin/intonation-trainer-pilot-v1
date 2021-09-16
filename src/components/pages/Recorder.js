
import { useState, useRef } from  'react'
import { render } from "react-dom";
import useRecorder from "./useRecorder";
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


const Recorder = (props) => {
  let [audioURL, isRecording, startRecording, stopRecording, rawData] = useRecorder();
  let audioRef = useRef()

  const audio = audioRef.current

  // const handlestop = props.sets(rawData)
  
  const currentAudio = audio ? audio.addEventListener('canplaythrough', (event) => {
    if (rawData) {props.sets(rawData)};
    return
  }) : "NONE";

  return (
    <div className="Recorder" id="recorder" ref={props.forwardedRef}>
      <audio src={audioURL} ref={audioRef} controls/>
      <button onClick={startRecording} disabled={isRecording}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button>
    </div>
  );
}
export default Recorder;