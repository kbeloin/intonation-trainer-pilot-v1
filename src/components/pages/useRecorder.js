import { useEffect, useState } from "react";


var options = {
  audioBitsPerSecond: 16000
}

var chunks = []


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
    const blob = new Blob([e.data]);
    var reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    reader.onloadend = () => {
      let view = new Int8Array(reader.result)
      
      setRawData(view);
      setAudioURL(URL.createObjectURL(e.data))//log of base64data is "data:audio/ogg; codecs=opus;base64,GkX..."
    }
    
    }; 
      
     // Trying to set the media type here so it matches with upload
    
    
    // readyState will be 2

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


