import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const getResponses = async (data) => {
    const response = await axios({
        method: "get",
        url: "/api/responses/",
    });
    console.log("Asychronous response")
    return response
}

export const submitResponse = () => {
    
}

export default submitResponse