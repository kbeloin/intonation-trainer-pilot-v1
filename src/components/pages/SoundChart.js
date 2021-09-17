import React, { useState, useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables);

export const getData = (processedData) => {
    const data = processedData['data'] || []
    const time = data['time']
    const pitch = data['pitch']
    const pData = time.map((x, i) => ({ x, y: pitch[i] }))
    
    console.log(pData)
    
    return pData
}


const getConfig = () => {  
    const config = {
        type: 'scatter',
        datasets: [],
        options: {
          scales: {
            x: {
              grid: {
                tickColor: 'red'
              },
              ticks: {
                color: 'blue',
              }
            }
          }
        }
      };
    return config
}

export const createChart = (parent) => {
    const chart = document.createElement('canvas');
    chart.setAttribute("id", "Chart");
    parent.appendChild(chart)
    return chart
}

export const newChart = ( element, data ) => {
    var ctx = element.getContext('2d')
    const myChart = new Chart(ctx, {
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
    const processedData = getData(data)
    console.log(processedData)
    console.log(chart)
    chart.data.datasets.data = data
    chart.update()
    
}


// export const updateChart = () => {

// }

export default newChart
