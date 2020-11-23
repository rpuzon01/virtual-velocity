import axios from "axios";

import {getLocalToken} from '../util'

const BASE_URL = "/api"

export async function getProducts(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/products/${id}`);
    console.log("data from index API getProducts", data);
    return data;
  } catch (error) {
    throw error;
  }
} 

export async function getProductById(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/products`);
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

export async function register(username, password) {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/register`, {username, password});
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
