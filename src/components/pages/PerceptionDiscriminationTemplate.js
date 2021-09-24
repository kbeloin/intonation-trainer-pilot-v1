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
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  
const PerceptionDiscriminationTemplate = () => {
    const [correct, showCorrect] = useState(false);
    const [incorrect, showIncorrect] = useState(false);
    const [trial, setTrial] = useState(null);
    const [polite, setPolite] = useState(null)
    const [prominent, setProminent] = useState(null)
    const [sentenceA, setA] = useState(null)
    const [sentenceB, setB] = useState(null)
    const instructionRef = useRef()
    const exampleRef = useRef()

    const sentenceData = ["id","filepath"]
    const history = useHistory()
    



    const classes = useStyles();

    const getResponse = () => {
        showCorrect(false)
        showIncorrect(false)
        getResponses(sentenceData).then((response) => {
            const data = response.data
            setTrial(data)
            setA(data.sentence[0])
            setB(data.sentence[1])
        });
            
    }

    const handlePoliteChange = (event, nextView) => {
        console.log(nextView)
        setPolite(nextView);
      };

    const handleProminentChange = (event, nextView) => {
        console.log(nextView)
        setProminent(nextView);
    };

    const evaluate = () => {
        const target = trial.target
        const trial_target = prominent
        console.log(trial_target)
        console.log(target)

        if (trial_target.id === target) {
            showCorrect(true)
            console.log(target)
            let request = { eval: 1, response: trial_target.id, response_id: trial.response_id }
            submitResponse(request)
            return
            
            
        } else {

        showIncorrect(true)
        let request = { eval: 0, response: trial_target.id, response_id: trial.response_id }
        submitResponse(request)
        }
    }

    const nextTrial = () => {
        let request = ["id"]
        showCorrect(false)
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
                        setA(data.sentence[0])
                        setB(data.sentence[1])

                    }
              })
            }
    
    useEffect( () => {
      
        getResponses(sentenceData).then((response) => {
            const data = response.data
            setTrial(data)
            instructionRef.current.textContent = data.text.instructions
            exampleRef.current.textContent = data.text.example_text
            console.log(data.sentence[0])
            setA(data.sentence[0])
            setB(data.sentence[1])

           
        });

    },[]);
///Change
    return (
        <div>
            <Stack direction="row" justifyContent="flex-start" alignItems="baseline" alignContent="center" spacing={5}>
                <Instructions childExampleRef={exampleRef} childInstructionRef={instructionRef}/>
                <Typography alignSelf={'flex-start'} marginRight={'50px'} variant='body1' component="h2" gutterBottom xs={3}>
                    {trial ?  "Question: " + trial.trial_id + " | Attempts: " + remainingAttempts(trial.response_id) : null }
                </Typography> 
            </Stack>
        <Paper className={classes.paper}>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
                <Typography variant="subtitle1" component="h2" gutterBottom>
                      {trial ? trial.text.instructions_short : "Loading..."} 
                </Typography>
                    <Stack direction="column" justifyContent="center" alignItems="center" alignContent="center" spacing={6}>
                                      
                        <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
                        <Typography style={{marginRight:"20px", marginLeft:'20px'}} variant="subtitle1" component="h2" gutterBottom>
                        A
                        </Typography> 
                            <Player url={sentenceA ? sentenceA.filepath : null}/>
                        </Stack>
                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
                        <Typography style={{marginRight:"20px", marginLeft:'20px'}} variant="subtitle1" component="h2" gutterBottom>
                        B
                        </Typography> 
                            <Player url={sentenceB ? sentenceB.filepath : null}/>
                        </Stack>
                        </Stack>
                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
                        <Typography style={{marginRight:"20px", marginLeft:'20px'}} variant="subtitle1" component="h2" gutterBottom>
                                            More Polite?
                        </Typography> 
                    <ToggleButtonGroup
                            orientation="horizontal"
                            value={polite}
                            exclusive
                            onChange={handlePoliteChange}
                            >
                            <ToggleButton  disabled={correct || incorrect} value={trial ? trial.sentence[0] : -1} aria-label="A" fullWidth={true}>
                            Sentence A`
                            </ToggleButton>
                            <ToggleButton  disabled={correct || incorrect} value={trial ? trial.sentence[1] : -1} aria-label="B" fullWidth={true}>
                            Sentence B
                            </ToggleButton>   
                        </ToggleButtonGroup>   
                        </Stack>
                    <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
                        <Typography style={{marginRight:"20px", marginLeft:'20px'}} variant="subtitle1" component="h2" gutterBottom>
                        More Appropriate Prominence?
                        </Typography> 
                    <ToggleButtonGroup
                            orientation="horizontal"
                            value={prominent}
                            exclusive
                            onChange={handleProminentChange}
                            >
                            <ToggleButton value={trial ? trial.sentence[0] : -1} aria-label="list"  disabled={correct || incorrect}>
                            Sentence A
                            </ToggleButton>
                            <ToggleButton value={trial ? trial.sentence[1] : -1} aria-label="quilt" disabled={correct || incorrect}>
                            Sentence B
                            </ToggleButton>   
                        </ToggleButtonGroup>   
                    </Stack>
                            
                 
                </Stack>
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
                        Not Quite! Remember to listen to the tone choice at the <u>end</u> of the word.
                        </Alert>
                    </Collapse>
                </Box>
                <Button size="medium"variant="contained" onClick={() =>{evaluate()}}  disabled={(!polite || !prominent) || (correct || incorrect)} >Submit</Button>
            </Stack>
            <Button size="large"variant="contained" style={{alignSelf:"flex-end"}} onClick={() =>{nextTrial()}}  disabled={!correct}>Next</Button>
        </Paper>
        </div>
    )
}
export default withRouter(PerceptionDiscriminationTemplate);