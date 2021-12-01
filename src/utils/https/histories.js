import Axios from "axios";

const url = process.env.REACT_APP_BASE_URL

export const addNewHistory = (body) => {
    return Axios.post(`${url}/histories/`, body)
}