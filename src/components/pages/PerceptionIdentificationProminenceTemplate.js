import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Player from '../elements/Player';
import Button from '@material-ui/core/Button'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { getResponses, submitResponse } from '../utils/responseHelper';
import { withRouter, useHistory } from 'react-router-dom';
import WordList from '../elements/WordList';
import Icon from '@mui/material/Icon'
import Instructions from './Instructions';
import remainingAttempts from '../utils/remainingAttempts';


const useStyles = makeStyles((theme) => ({
    content: { 
      justifyContent: "center",
      display: "flex"
    },
      paper: {
        padding: theme.spacing(2),
        
        minWidth: '100vw',
        height: '85vh',
        display:"flex",
        elevation: 3,
        position: 'relative',
        justifyContent: 'center'
        
      },
  }));

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  
const PerceptionIdentificationProminenceTemplate = () => {
    const [correct, showCorrect] = useState(false);
    const [incorrect, showIncorrect] = useState(false);
    const [force, showForcedForward] = useState(false)
    const [trial, setTrial] = useState(null);
    const [attempts, setAttempts] = useState(0)
    const sentenceData = ["id","filepath","prominent_words"]
    const history = useHistory()
    const instructionRef = useRef()
    const [words, setWords] = useState([])

    const classes = useStyles();

    const getResponse = () => {
        showCorrect(false)
        showIncorrect(false)
        showForcedForward(false)
        getResponses(sentenceData).then((response) => {
            const data = response.data
            setTrial(data)});
    }

    const evaluate = () => {
        const target = new Set
        words.forEach((e) => target.add(e.value))
        let trial_target = new Set (trial.sentence.prominent_words.split(','))

        let a = new Set([...trial_target].filter(x => !target.has(x)));
        let b = new Set([...target].filter(x => !trial_target.has(x)));
        console.log(a.size && b.size)
        if (!a.size && !b.size) {
            showCorrect(true)
            console.log(target)
            let request = { eval: 1, response: target, response_id: trial.response_id }
            submitResponse(request)
            setWords([])
            
            return
        }

        
        let request = { eval: 0, response: target, response_id: trial.response_id }
        submitResponse(request).then((response)=> {
            setAttempts( attempts + 1 )
            const data = response.data;
            if (attempts === data.attempts) {
                showForcedForward(true)
            } else {
                showIncorrect(true)
            }

        })
    }

    const nextTrial = () => {
        let request = ["id"]
        getResponses(request).then((response) => {
                    const data = response.data
                    console.log(data)
                    if (data.task_id != trial.task_id) {
                        console.log("Task completed. Moving to next task")
                        history.push(`/${data.type}`)
                    }
                    if (data.trial_id != trial.trial_id) {
                        console.log("Trial completed. Moving to next trial")
                        getResponse()
                    }

                    else {
                        setTrial(data)
                    }
              })
            }


    useEffect( () => {
        getResponses(sentenceData).then((response) => {
            const data = response.data
            setTrial(data)
            instructionRef.current.textContent = data.text.instructions
        });
    },[]);
///Change
    return (
        <div>
            
            <Stack direction="row" justifyContent="flex-start" alignItems="baseline" alignContent="center" spacing={5}>
                <Instructions childRef={instructionRef}/>
                    <Typography alignSelf={'flex-start'} marginRight={'50px'} variant='body1' component="h2" gutterBottom xs={3}>
                    {trial ?  "Question: " + trial.trial_id + " | Attempts: " + remainingAttempts(trial.response_id) : null }
                    </Typography> 
                </Stack>
        <Paper className={classes.paper}>
        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={5}>
            </Stack>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
                <Typography variant="subtitle1" component="h2" gutterBottom>
                      {trial ? trial.text.instructions_short : "Loading..."} 
                  </Typography>
                <Player url={trial ? trial.sentence.filepath : null}/>
                <Box style={{width: "100%"}}>
                    <Collapse in={correct}>
                        <Alert
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            >
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                        >
                        Well done! Click next to continue.
                        </Alert>
                    </Collapse>
                    <Collapse in={incorrect}>
                        <Alert
                        action={
                            <IconButton aria-label="close" color="error" size="small" onClick={() => { getResponse()}}>
                                <Icon>close</Icon>
                            </IconButton>
                            }
                        severity="error"
                        sx={{ mb: 2 }}
                        >
                        Try again! Remember to listen to the tone choice at the <u>end</u> of the word.
                        </Alert>
                    </Collapse>
                    <Collapse in={force}>
                        <Alert
                        action={
                            <IconButton aria-label="close" color="error" size="small">
                                
                            </IconButton>
                            }
                        severity="error"
                        sx={{ mb: 2 }}
                        >
                        You've reached the maximum number of attempts. Click next to continue!
                        </Alert>
                    </Collapse>
                </Box>
                <Stack direction="row" spacing={18} xs={12}>
                    <WordList callback={evaluate} wordList={words} setWordList={setWords} correct={correct} incorrect={incorrect} force={force}/>
                </Stack>
            </Stack>
            <Button size="large"variant="contained" style={{alignSelf:"flex-end"}} onClick={() =>{nextTrial()}}  disabled={!correct || force }>Next</Button>
        </Paper>
        </div>
    )
}
export default withRouter(PerceptionIdentificationProminenceTemplate);

