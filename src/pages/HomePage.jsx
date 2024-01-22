// import React from 'react';
// import productService from "../services/productService";
// import { useState } from "react";
// import ModalInformation from '../components/ModalInformation';
// import BotonMaterial from '../components/BotonMaterial';

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

// const HomePage = () => {
//     const [isModalOpen, setModalOpen] = useState(false);
  
//     const handleOpenModal = () => {
//       setModalOpen(true);
//     };
  
//     const handleCloseModal = () => {
//       setModalOpen(false);
//     };
  
//     return (
//       <div>
//         <h3>Ventana Modal</h3>
//         <BotonMaterial onClick={handleOpenModal} />
//         <ModalInformation isOpen={isModalOpen} handleClose={handleCloseModal} />
//       </div>
//     );
//   };

// export default HomePage;
// HomePage.jsx
// HomePage.jsx

// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material/';
import ArticuloCard from '../components/ArticuloCard';


const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/products.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data); // Agregar este console.log
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  console.log({data});

  return (
    <>
    <Grid container spacing={2}>
    {data.length > 0 && data.map((articulo, index) => (
      <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
        <ArticuloCard data={articulo} />
      </Grid>
    ))}
  </Grid>
  </>
  );
};
export default HomePage;
