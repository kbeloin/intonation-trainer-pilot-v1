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
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
      paper: {
        padding: theme.spacing(2),
        justifyContent: 'center',
        minWidth: '100vw',
        height: '85vh',
        display:"flex",
        elevation: 3,
        position: 'relative'
        
      },
  }));

  
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export const Instructions = (props) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };

    const handleToggle = () => {
      setOpen(!open);
    };
    
    return (
        <div>
        
            <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Paper className={classes.paper}>
        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={5}>
                <Typography variant="subtitle1" component="h2" gutterBottom>
                   {trial ? "TRIAL " + trial.trial_id + " : " + trial.response_id : "Loading" }
                    </Typography> 
                    </Stack>
                    <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
                        <Typography variant="subtitle1" component="h2" gutterBottom>
                            
                            </Typography>
                            <Box style={{width: "100%"}}>
                        </Box>
                    </Stack>
                <Button size="large"variant="contained" style={{alignSelf:"flex-end"}} onClick={() =>{handleclose()}}  disabled={!correct}>Next</Button>
                
            </Paper>
      </Backdrop>
        </div>
    )
}
export default Instructions;