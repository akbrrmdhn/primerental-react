import Axios from "axios";

const url = process.env.REACT_APP_BASE_URL

export const getVehicleByID = (id) => {
  return Axios.get(`${url}/vehicles/${id}`)
}

export const addNewVehicle = (body, token) => {
  return Axios.post(`${url}/vehicles/`, body, {
    headers: {'x-access-token': `Bearer ${token}`}
  })
}

export const editVehicle = (id, body, token) => {
  return Axios.patch(`${url}/vehicles/${id}`, body, {
    headers: {'x-access-token': `Bearer ${token}`}
  })
}

export const deleteVehicle = (id, token) => {
  return Axios.delete(`${url}/vehicles/${id}`, {
    headers: {'x-access-token': `Bearer ${token}`}
  })
}

export const getFavourites = user_id => {
    return Axios.get(`${url}/vehicles/like`, {
      params: {
        user_id,
      },
    });
  };
  
  export const likeVehicle = queries => {
    return Axios.post(`${url}/vehicles/like`, {
      params: {
        queries,
      },
    });
  };
  
  export const unlikeVehicle = queries => {
    return Axios.delete(`${url}/vehicles/like`, {
      params: {
        queries,
      },
    });
  };
  