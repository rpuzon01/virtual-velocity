import axios from 'axios';

const BASE_URL = '/api'

export const setLocalToken = (token) => {
    localStorage.setItem("token", token);
  };
  
export const getLocalToken = () => {
    return localStorage.getItem("token");
  };
  
export const removeToken = () => {
    localStorage.removeItem("token");
  };

export const setLocalUser = (user) => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  } 
};

export const getLocalUser = () => {
  const user = localStorage.getItem("user")
  if (user){
    return JSON.parse(user);
  }

  return user;
};

export const removeUser = () => {
  localStorage.removeItem("user");
};

export const fetchUser = async ({method, body, url}) => {
  try {
    const options = {
      method: method || 'get',
      data: body,
      url: `${BASE_URL}${url}`
    }
    console.log('url', options.url);

    if (getLocalToken()) {
      options.headers = {
        'Authorization': `Bearer ${getLocalToken()}`
      } 
    }

    const {data} = await axios(options);  
    return data;
  } catch (error) {
    console.error(error)
  }
}
