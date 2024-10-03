import { useEffect, useState } from "react"
import axios from "axios";
import { useGetToken } from "./useGetToken";
import { IProduct } from "../models/interfaces";

export const useGetProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const { headers } = useGetToken()

    const fetchProducts = async () => {
        try{

            const fechedproducts = await axios.get("http://localhost:3000/product", {headers});
            setProducts(fechedproducts.data.products)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            alert("Something went wrong!")
        }
    }

    useEffect(() => {
        fetchProducts()
    },[])

    return {products}
}