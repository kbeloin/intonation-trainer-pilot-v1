import React, {useState, useEffect} from 'react'
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
import Icon from '@mui/material/Icon'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PerceptionIdentificationTonesTemplate from './PerceptionIdentificationTonesTemplate';

const useStyles = makeStyles((theme) => ({
      paper: {
        padding: theme.spacing(2),
        justifyContent: 'center',
        minWidth: '100vw',
        height: '40vh',
        display:"flex",
        elevation: 3,
        position: 'relative'
        
      },
  }));

  
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export const Instructions = (props) => {
    const classes = useStyles();

    const [open, setOpen] = useState(true);

    const handleClose = () => {
      setOpen(false);
    };

    const handleToggle = () => {
      setOpen(!open);
    };
    
    return (
        <div>
            <IconButton aria-label="close" color="info" size="small" onClick={() => handleToggle()}>
                            <Icon>help</Icon>
                        </IconButton>
            <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }}
        open={open}
        onClick={handleClose}
      ><Stack direction="column" spacing={3} justifyContent="center" >
        <Paper className={classes.paper} >
            <Typography variant="h2" component="h2" gutterBottom ref={props.childInstructionRef}>
                
            </Typography>
        </Paper>
    
        </Stack>
      </Backdrop>
        </div>
    )
}



export default Instructions;