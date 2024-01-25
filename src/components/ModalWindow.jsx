// import React from "react";
import React, { useState, useEffect } from "react";
import productService from "../services/productService";

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  console.log("Props: " + props.productId);
  let id = props.productId;

  async function getData() {
    setProduct(await productService.showProduct(id));
  }

  const [product, setProduct] = useState({});

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button
        className="flex items-center justify-center gap-0 bg-green-500 text-white active:bg-green-600 font-bold text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg
          className="w-3.5 h-3.5 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 576 512"
        >
          <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
        </svg>
        Ver
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-blue-600/75">
                    {product.name}

                    <div className="relative p-1">
                      <img className="place-content-center my-0 text-blueGray-500 leading-relaxed rounded-t-sm w-40 h-30" src={product.photo} alt="imagen"/>
                    </div>
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-2">
                  <p className="my-1 text-blueGray-500 text-lg leading-relaxed text-justify">
                   {product.description}
                  </p>
                </div>
                <div className="p-6 mb-2 text-2l font-bold tracking-tight text-gray-900 dark:text-white">
                  <p className="my-4  text-lg leading-relaxed decoration-sky-500">
                  <i class="fa-regular fa-circle-dot"></i> Stock: {product.stock}</p>
                  <p className="my-4  text-lg leading-relaxed decoration-sky-500">
                  <i class="fa-regular fa-circle-dot"></i> PVP: {product.price} €</p>
                  <p className="my-4  text-lg leading-relaxed decoration-sky-500">
                  <i class="fa-regular fa-circle-dot"></i> Ubicación: {product.type}</p>
                </div>
            
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
