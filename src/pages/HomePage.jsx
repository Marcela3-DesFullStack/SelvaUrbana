import React from 'react';
import productService from "../services/productService";
import { useState } from "react";
import ModalInformation from '../components/ModalInformation';
import BotonMaterial from '../components/BotonMaterial';

// const HomePage = () => {
//     const [products, setProducts] = useState([]);
//     async function getProducts() {
//         let data = await productService.getProducts();
//         setProducts(data);
//     }   
//     return (
        <>
        {/* <button onClick={() => getProducts()}>click here</button>
        {
            products.map(product => {
                return <h1>{product.name}</h1>
            })
        } */}
        {/* <BotonMaterial /> */}
        </>
        
//         )
// }
// productService.getProducts();

const HomePage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  
    return (
      <div>
        <h3>Ventana Modal</h3>
        <BotonMaterial onClick={handleOpenModal} />
        <ModalInformation isOpen={isModalOpen} handleClose={handleCloseModal} />
      </div>
    );
  };

export default HomePage;