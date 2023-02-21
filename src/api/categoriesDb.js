import axios from "axios";

export const categoriesDb = axios.create({
    baseURL: 'https://techstore-rest-api.vercel.app'
})

export default categoriesDb;