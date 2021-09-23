import { getCSRF } from './csrfHelper.js'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const processAudioData = async (data) => {
    const response = await axios({
        method: "post",
        url: "/api/process/",
        data: data,
        headers: {"Content-Type": "application/octet-stream"},
        transformRequest: [(data) => {
            return JSON.stringify(data);
        }],
        transformResponse: [(data) => {
            return JSON.parse(data);
        }]
    });
    return response
}

export const getPitchScatterData = (processedData) => {
    console.log(processedData)
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

export default processAudioData