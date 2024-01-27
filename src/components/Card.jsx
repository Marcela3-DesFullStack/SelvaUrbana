import React, { useEffect, useState } from 'react';
import ModalWindow from './ModalWindow';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import productService from '../services/productService';
import Header from './header';

export default function CardProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setProducts(await productService.getProducts());
  }

  return (
    <>
    {/* <Header /> */}
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <a
          key={product.id}
          href="#"
          className="m-4 flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={product.photo} // Asegúrate de tener una propiedad imageSrc en tu objeto product
            alt={product.name}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Planta de {product.type}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Stock: {product.stock} uds. Precio: {product.price}€
            </p>
            <div className="flex gap-2 items-center justify-between">
              <ModalWindow productId={product.id} />
              <EditButton />
              <DeleteButton />
            </div>
          </div>
        </a>
      ))}
    </div>
    </>
  );
}
