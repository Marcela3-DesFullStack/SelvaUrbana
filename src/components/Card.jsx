import React from 'react'
import ModalWindow from './ModalWindow';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';


export default function CardProduct() {
    return (
<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-sm" src= "../src/assets/image-1.jpg" alt="imagen" />
    </a>
    <div className="p-0">
        <a href="#">
            <h5 className="mb-2 text-2l font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
        <div className="flex gap-2 items-center justify-between">
            <ModalWindow />
            <EditButton />
            <DeleteButton />
        </div>
        
    </div>
</div>
 )
}

