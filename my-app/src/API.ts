import axios from "axios";
const API_URL = "/api";

export const fetchProducts  = async () => {
  try {
    const { data: products } = await axios.get(`${API_URL}/products`);
    return products;
  } catch (error) {
    console.error("Failed to fetch products");
    throw error;
  }
}
