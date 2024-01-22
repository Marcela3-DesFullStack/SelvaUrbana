//funciones para el GET, POST, DELETE, UPDATE



const productService = {
    async getProducts () {
            let response = await fetch("http://localhost:3000/products");
            let data = await response.json()
            console.log(data);
            return data;
    },
    
    async createProduct () {
        console.log ('Hola');
    },
    
    async deleteProduct (Id) {
        try {
            let response= await fetch(`http://localhost:3000/products/${Id}`, 
            { method: "DELETE",
              headers: { "Content-Type": "application/json",
                },
            });
            //console.log("Producto eliminado correctamente");
            await response.json()
          } catch (error) {
            console.error("Error al eliminar el producto", error);
          }
          deleteProducts()
        },
    
    async updateProduct () {
        console.log ('Hola');
    }
    
    };
    
    
    export default productService;