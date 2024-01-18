import React from 'react';
import AddButton from "../components/AddButton";
import productService from "../services/productService";
import { useState } from "react";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    async function getProducts() {
        let data = await productService.getProducts();
        setProducts(data);
    }   
    return (
        <>
        <button onClick={() => getProducts()}>click here</button>
        {
            products.map(product => {
                return <h1>{product.name}</h1>
            })
        }
        </>
        )
}
// productService.getProducts();

export default HomePage;