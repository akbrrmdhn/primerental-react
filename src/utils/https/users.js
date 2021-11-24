import Axios from "axios";

const url = process.env.REACT_APP_BASE_URL;

  export const getUser = token => {
    return Axios.get(`${url}/users/`, {
      headers: {'x-access-token': `Bearer ${token}`, 'Access-Control-Allow-Origin': '*'},
    });
  };
  
  export const postUpdateProfile = (body, token) => {
    return Axios.patch(`${url}/users/edituser/`, body, {
      headers: {'x-access-token': `Bearer ${token}`},
    });
  };
  
  export const forgotPassword = body => {
    return Axios.post(`${url}/auth/forgot-password`, body);
  };
  
  export const checkCode = body => {
    return Axios.post(`${url}/auth/forgot-password/code`, body);
  };
  
  export const changePassword = body => {
    return Axios.patch(`${url}/auth/forgot-password/change-password`, body);
  };

  export const updatePassword = (token, body) => {
    return Axios.patch(`${url}/auth/change-pass`, body, {
      headers: {'x-access-token': `Bearer ${token}`},
    });
  };