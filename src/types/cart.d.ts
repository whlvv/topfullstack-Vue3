export interface Product {
  id: number;
  name: string;
  price: number;
  stock?: number;
  [key: string]: any;
}

export interface CartItem {
  productId: number;
  quantity: number;
  name: string;
  price: number;
}