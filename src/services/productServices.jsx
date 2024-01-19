

const productService = {};

// Utiliza una función asíncrona para poder usar "await"
productService.getProducts = async () => {
    try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json(); // Corrige el uso de .json()
        console.log(data); // Muestra los datos en la consola
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
};

export default productService;