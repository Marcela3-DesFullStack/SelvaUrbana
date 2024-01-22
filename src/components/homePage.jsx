import React, { useState, useEffect } from "react";
import productService from "../services/productservice";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: "",
        photo: "",
        type: "",
        stock: "",
        price: "",
        description: "",
    });

    useEffect(() => {
        const fetchProducts = async () => { //variable para GET
            try {
                const data = await productService.getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };

        fetchProducts(); // Llama a la función cuando el componente se monta
    }, []); // El segundo argumento [] asegura que este efecto se ejecute solo una vez al montar el componente
        
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value});
    };

    const handleFormSubmit = async (e) => {
        e.preventDefaul();

        try {
            await productService.createProduct(newProduct);
    // Recargar la lista de productos después de crear uno nuevo
            const updatedProducts = await productService.getProducts();
            setProducts(updatedProducts);
     // Limpiar el formulario después de la creación exitosa
            setNewProduct({
                name: "",
                photo: "",
                type: "",
                stock: "",
                price: "",
                description: ""
        });
    } catch (error){
        console.error("Error al crear el producto:", error);
    }

};
    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <label>
                Nombre:
                <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                />
                Tipo: 
                <input
                    type="text"
                    type="type"
                    value={newProduct.type}
                    onChange={handleInputChange}
                    />
                    
            </label>
            {/* Añade otros campos del formulario según tus necesidades */}
            <button type="submit">Nueva planta</button>
        </form>
            {/* Eliminamos el botón */}
            {products.map(product => (
                <div key={product.id}>
                    <p>Nombre: {product.name}</p>
                    <p> 
                        <span className="text-grey">Tipo: </span>
                        <span>{product.type}</span>
                    </p>
                    <p>Precio: {product.price} €</p>
                    <p>Stock: {product.stock} </p>
                    <p>Descripción: {product.description} </p>
                    <img src={product.photo} alt={product.name} />
                    {/* Otros detalles del producto, como type, stock items, price, etc. */}
                </div>
            ))}
        </>
    );
};

export default HomePage;