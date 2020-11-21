import axios from "axios";
const BASE = "/api";

export async function getProduct(id) {
  try {
    const { data } = await axios.get(`${BASE}/products/${id}`);
    console.log("data from index API getProducts", data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getProducts() {
  try {
    const { data } = await axios.get(`${BASE}/products`);
    console.log("data from index API getProducts", data);
    return data;
  } catch (error) {
    throw error;
  }
}
