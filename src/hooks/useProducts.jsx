import { useEffect, useState } from "react"
import productsDb from "../api/productsDb";

export const useProducts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        setIsLoading(true);


        const { data } = await productsDb.get('/products');
        setProducts( data );

        setIsLoading( false );

    }

    useEffect(() => {
        getAllProducts();
    }, [])
    

    return {
        isLoading,
        products
    }

}