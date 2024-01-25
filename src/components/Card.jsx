import React, { useEffect, useState } from 'react'
import ModalWindow from './ModalWindow';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import productService from '../services/productService';

export default function CardProduct() {
    const [products, setProducts] = useState({})

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        setProducts(await productService.getProducts())
    }

    return (
<div className="max-w-xs bg-white border border-dark-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-sm w-64 h-64" src={products.length > 0 && products[0].photo} alt="imagen" />
    </a>
    <div className="p-0">
        <a href="#">
            <h5 className="mb-2 text-2l font-bold tracking-tight text-gray-900 dark:text-white">
                {products.length > 0 && products[0].name}
            </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Planta de {products.length > 0 && products[0].type}
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Stock: {products.length > 0 && products[0].stock} uds.  Precio: {products.length > 0 && products[0].price}€
        </p>

        <div className="flex gap-2 items-center justify-between">
            <ModalWindow productId={1}/>
            <EditButton /> 
            <DeleteButton />
        </div>
        
    </div>
</div>
 )
}