export type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
  imageURL: string;
  inStock: boolean;
  category: string;
}

export type Order = {
  id?: number;
}
