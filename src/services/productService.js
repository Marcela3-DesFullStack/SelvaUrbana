const productService = {
    async getProducts() {
        let response = await fetch("http://localhost:3000/products");
        let data = await response.json();
        console.log(data);
        return data;
    },

    async createProduct(newProduct) {
        let response = await fetch("http://localhost:3000/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });

        let data = await response.json();
        console.log(data);
        return data;
    },
};



    
    
    export default productService;