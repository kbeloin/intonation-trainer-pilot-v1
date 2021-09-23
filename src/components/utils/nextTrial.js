import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const useTrial = (sentenceProps) => {

    const [trial, setTrial] = useState()
    const history = useHistory()

    let request = [...sentenceProps]
    getResponses(request).then((response) => {
                const data = response.data
                console.log(data)
                if (data.task_id != trial.task_id) {
                    console.log("Task completed. Moving to next task")
                    history.push(`/${data.type}`)
                }
                if (data.trial_id != trial.trial_id) {
                    console.log("Trial completed. Moving to next trial")
                    getResponse();
                } else {
                    setTrial(data)
                };
            });
            return [trial, history, setTrial]
        };

export default useTrial