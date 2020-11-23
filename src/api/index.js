import axios from "axios";
const BASE = "/api";

import {getLocalToken} from '../util'

const BASE_URL = "/api"

export async function getProductById(id) {
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


export async function login(username, password) {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/login`, {username, password});
    return data;
  } catch (error) {
    throw error;
  }
}

export async function register({username, password, firstName, lastName, email}) {
  try {
    const {data} = await axios.post(`${BASE}/users/register`, {
    username,
    password,
    firstName,
    lastName,
    email,
    });
      // setMessage(data.message)

  console.log('data register from API', data);
  return data;

  } catch (error) {
    throw error
  }
}

export async function getUser(token) {
  try {
    const { data } = await axios.get(`${BASE}/me`, {
      headers: {
      'Authorization': `Bearer ${token}`
    }})
    console.log("userData from API", data)
    return data;

  } catch (error) {
    throw error;
  }
}

export async function getOrdersByUserId(id, token) {
    try {
        const { data } = await axios.get(`${BASE_URL}/users/${id}/orders`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        throw error;
    }
}
