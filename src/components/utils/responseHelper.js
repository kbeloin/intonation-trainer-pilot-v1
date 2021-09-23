import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const getResponses = async (data) => {
    const response = await axios({
        method: "post",
        url: "/api/get-responses/",
        data: { params: data }
    });
    console.log(data)
    console.log(response)
    return response
}

export const createTrial = async (data) => {
    const response = await axios({
        method: "get",
        url: "/api/get-responses/",
        data:data
    });
    console.log("Created experiment")
    return response
}


export const submitResponse = async (data) => {
        const response = await axios({
            method: "post",
            url: "/api/submit-response/",
            data: data
        });
        console.log("Submitted response")
        return response
}

export default submitResponse