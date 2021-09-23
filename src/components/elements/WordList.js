import React, { useState, useReducer, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { WorkRounded } from '@material-ui/icons';
import { SliderTrack } from '@mui/material';
import Icon from '@mui/material/Icon';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import { v4 } from 'uuid'
import IconButton from '@mui/material/IconButton';

const t = {list: []}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    }));


export const WordList = ({callback, wordList, setWordList, correct, incorrect}) => {
    
    const [word, setWord] = useState('')

    const handleInput = (e) => {
        setWord(e.target.value)
    }

    function handleAdd() {
        const newList = wordList.concat({ value: word.toLowerCase(), id: v4() })
        setWordList(newList)
        setWord('');
    }

    function handleRemove(id) {
        const newList = wordList.filter((item) => item.id !== id)
        setWordList(newList)
    }




    return (
        <Stack direction="column" spacing={1}>
            
            <Stack direction="row" spacing={6} xs={12}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="code"
                    label="Enter Word"
                    variant="outlined"
                    value={word}
                    onChange={handleInput}
                    />
                <Button onClick={ handleAdd } value={word} disabled={correct || incorrect}> Add </Button>
                <Button onClick={ () => { callback(wordList) } } disabled={correct || incorrect}> Submit</Button>
            </Stack>
            <Stack direction="row" spacing={2}>
                    { wordList.map((item) => { return (
                        <Item key={item.id}> 
                        {item.value}
                        <IconButton aria-label="close" color="info" size="small" onClick={() => handleRemove(item.id)}>
                            <Icon>close</Icon>
                        </IconButton>
                    </Item>
                    )})}
                </Stack>
        </Stack>
       
    );
    }

export default WordList;