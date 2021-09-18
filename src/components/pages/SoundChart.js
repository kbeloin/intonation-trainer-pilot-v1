import React, { useState, useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables);

const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

export const getPitchScatterData = (processedData) => {
    
    let data = processedData['x_y'] || []
    for (let i = 0; i < data.length; i++) {
        if (data[i]['x'] === 0) {
            data[i]['x'] = NaN;
        }
        if (data[i]['y'] === 0) {
            data[i]['y'] = NaN;
        }
      }

    return data
}

export const resetCanvas = (id, container_id, chart) => {
    chart.destroy()
    document.getElementById(id).remove()
    const newCanvas = document.createElement('canvas')
    newCanvas.setAttribute('id', id)
    document.getElementById(container_id).append(newCanvas)
    return newCanvas
}

export const newPitchChart = ( element, data ) => {
    let ctx = element.getContext('2d')
    
    let myChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Pitch Frequency',
                    data: data,
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
    return myChart
}

export const updateChart = (chart, data) => {
    const processedData = getPitchScatterData(data)
    chart.data.datasets.data = data
    chart.update()
}

export default newPitchChart
