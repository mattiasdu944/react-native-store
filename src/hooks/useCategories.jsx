import { useEffect, useState } from "react"
import categoriesDb from "../api/categoriesDb";

export const useCategories = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    const getAllCategories = async () => {
        setIsLoading(true);


        const { data } = await categoriesDb.get('/categories');
        setCategories( data );

        setIsLoading( false );

    }

    useEffect(() => {
        getAllCategories();
    }, [])
    

    return {
        isLoading,
        categories
    }

}