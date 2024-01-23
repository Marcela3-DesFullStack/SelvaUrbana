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
        setProducts(productService.getProducts())
    }

    return (
<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-sm" src= "../src/assets/image-1.jpg" alt="imagen" />
    </a>
    <div className="p-0">
        <a href="#">
            <h5 className="mb-2 text-2l font-bold tracking-tight text-gray-900 dark:text-white">
                {products.length > 0 && products[0].name}
            </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {products.length > 0 && products[0].description}
            {products.length > 0 && products[0].name}
        </p>
        
        <div className="flex gap-2 items-center justify-between">
            <ModalWindow />
            <EditButton />
            <DeleteButton />
        </div>
        
    </div>
</div>
 )
}

