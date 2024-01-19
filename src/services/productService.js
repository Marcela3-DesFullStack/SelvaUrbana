//funciones para el GET, POST, DELETE, UPDATE

// const productService = {
//     array: [],
// };

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
    
    async deleteProduct () {
        console.log ('Hola');
    },
    
    async updateProduct () {
        console.log ('Hola');
    }
    
    };
    
    
    export default productService;