
import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt?: string;
  updatedAt?: string;
}

export const getProducts = (page: Number) => {
   return axios.get<Product[]>(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=10`)
        .then(response => {
           return response.data;
        })
        .catch(error => {
            console.log(error);
        });
}