import axios from "axios";
const BASE = "/api";

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
    const { data } = await axios.get(`${BASE}/products/${id}`);
    console.log("data from index API getProducts", data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function login(username, password) {
  try {
    const { data } = await axios.get(`${BASE}/orders/cart`);
    console.log("data from index API getOrdersCart", data);
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

export async function getUser() {
  try {
    const { data } = await axios.get(`${BASE}/me`)
    console.log("userData from API", data)
    return data;

  } catch (error) {
    throw error;
  }
}
