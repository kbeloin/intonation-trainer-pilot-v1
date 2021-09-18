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
            console.log("hello from transform")
            return JSON.stringify(data);
        }],
        transformResponse: [(data) => {
            console.log("hello from response")
            return JSON.parse(data);
        }]
    });
    return response
}

export const processAudioData2 = async (data) => {
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