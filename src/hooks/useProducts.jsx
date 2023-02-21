import { useEffect, useState } from "react"
import productsDb from "../api/productsDb";

export const useProducts = ( url='' ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        setIsLoading(true);

        const { data } = await productsDb.get(`/products${ url }`);
        setProducts( data );

        setIsLoading( false );

    }

    useEffect(() => {
        getAllProducts();
    }, [])
    

    if( url.trim().length > 0 ){
        return {
            isLoading,
            product : products
        }
    }

    return {
        isLoading,
        products
    }

}