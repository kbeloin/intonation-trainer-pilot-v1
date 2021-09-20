import React, { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'


Chart.register(...registerables);

export const PitchChart = ( props ) => {
    let chartRef = useRef()
    
    useEffect(() => {
        let ctx = chartRef.current.getContext('2d')

        let myChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Pitch Frequency',
                    data: props.data,
                    borderWidth: 1,
                    backgroundColor: 'rgb(255, 99, 132)'
                    }]
                },
                options: {
                    scales: {
                        y: { },
                        x: { }
                    }
                }
            });
        },[])

    return (
        <canvas id="question-data" ref={chartRef}></canvas>
    )
}
