import { render } from "react-dom";
import useRecorder from "./useRecorder";
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const refreshList = (props) => {
  this.disabled = true;
  axios
    // .get("http://localhost:8000/api/todos/")
    // Because of proxy in package.json, command be shorten as follows:
    .get("/api/todos/")
    .then(res => this.setState({ todoList: res.data }))
    .catch(err => console.log(err));
};

const Recorder = (props) => {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  return (
    <div className="Recorder">
      <audio src={audioURL} controls/>
      <button onClick={startRecording} disabled={isRecording}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button>
      <button onClick={refreshList} disabled={!audioURL}>
        send
      </button>
    </div>
  );
}
export default Recorder;