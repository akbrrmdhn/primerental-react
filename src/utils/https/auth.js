import Axios from "axios";

const url = process.env.REACT_APP_BASE_URL
export const postLogin = (body) => {
    return Axios.post(`${url}/auth/login`, body);
}

export const postRegister = (body) => {
    return Axios.post(`${url}/auth/register`, body);
}
