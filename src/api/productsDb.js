import axios from "axios";

export const productsDb = axios.create({
    baseURL: 'https://techstore-rest-api.vercel.app'
    
})

export default productsDb;