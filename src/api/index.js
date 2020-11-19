
import axios from 'axios';
const BASE = 'http://localhost:5000/api'

export async function getSomething() {
  try {
    const { data } = await axios.get("/api");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getProduct(id) {
  try {
    const {data} = await axios.get(`${BASE}/products/${id}`)
    console.log('data from index API getProducts', data)
    return data;

  } catch (error) {
    throw error

  }
}
