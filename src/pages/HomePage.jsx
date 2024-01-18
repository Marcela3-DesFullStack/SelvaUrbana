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
    // <div className="container">
    //     <h1 className="diplay-1">Artículos Selva Urbana</h1>
    //     <p>Plantas para todos los gustos</p>
    //         <AddButton/>
    //     <div className='container-card'>
    //         <CardProduct/>
    //     </div>
    // </div>
    

    )
}
// productService.getProducts();

export default HomePage;