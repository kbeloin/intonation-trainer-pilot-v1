import { useEffect, useState } from "react";



var options = {
  audioBitsPerSecond: 16000
}


const ctx = new AudioContext();
const reader = new FileReader();

const useRecorder = () => {
const [audioURL, setAudioURL] = useState("");
const [isRecording, setIsRecording] = useState(false);
const [recorder, setRecorder] = useState(null);
const [rawData, setRawData] = useState(null)
  

  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error);
      }
      return;
    }

    // Manage recorder state.
    if (isRecording) {
      recorder.start();
    } else {
      recorder.stop();
    }

    // Obtain the audio when ready.
    const handleData = e => {
      // const blob = new Blob([e.data]);
      let ctx = new AudioContext();
      let reader = new FileReader();

      reader.readAsArrayBuffer(e.data);
      reader.onloadend = () => {
        console.log('data loaded')
        ctx.decodeAudioData(reader.result).then(function(decodedData) {
          console.log(decodedData)
          const view = decodedData.getChannelData(0) //
          setRawData(view); // This might be done by 
          setAudioURL(URL.createObjectURL(e.data))//log of base64data is "data:audio/ogg; codecs=opus;base64,GkX..."
       });  
    }
    }; 

    recorder.addEventListener("dataavailable", handleData);
    return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, isRecording]);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  return [audioURL, isRecording, startRecording, stopRecording, rawData];
};

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  return new MediaRecorder(stream, options);
}
export default useRecorder;


