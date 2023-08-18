export type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
  imageURL: string;
  inStock: boolean;
  category: string;
}

export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  imageURL?: string;
  username: string
  password: string;
  isAdmin?: boolean;
}

export type Order = {
  id?: number;
}

export type APIError = {
  data: {
    message: string;
  }
}
