import axios from "axios";

import {getLocalToken} from '../util'

const BASE_URL = "/api"

export async function getProduct(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/products/${id}`);
    console.log("data from index API getProducts", data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getProducts() {
  try {
    const { data } = await axios.get(`${BASE_URL}/products`);
    console.log("data from index API getProducts", data);
    return data;
  } catch (error) {
    throw error;
  }
}

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

export async function login(username, password) {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/login`, {username, password});
    console.log('dataLogin', data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function register(username, password) {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/register`, {username, password});
    return data;
  } catch (error) {
    throw error;
  }
}

// Login fetch call - axios
// Register fetch call - axios 
