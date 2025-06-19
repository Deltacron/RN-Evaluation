
import axios from 'axios';

export const getProducts = (page) => {
   return axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=10`)
        .then(response => {
           return response.data;
        })
        .catch(error => {
            console.log(error);
        });
}