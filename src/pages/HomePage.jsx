import AddButton from "../components/AddButton";
import productService from "../services/productService";
import { useEffect, useState } from "react";
import App from "../App";
import Header from "./Header";
import { StyledViewButton, StyledDeleteButton , StyledEditButton } from "../components/StyledButton";






const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        getProducts();
    }, []);

    async function getProducts() {
        let data = await productService.getProducts();
        setProducts(data);
    }
    return ( 
        <>
            <h2 className="display-5">Plantas para todos los gustos</h2>
                <AddButton />  

            <div className="container-cards">
                {products.map((product, index) => (
                
                                
                        
                    <div key={product.index}>
                        <img src={product.photo} alt={product.name} />
                        <h2 className="display-1">{product.name}</h2>
                        <h3>{product.type}</h3>
                        <h3>${product.price}</h3>
                        <h3>Stock: {product.stock} und</h3>
                           
                        <>
                             
                            <StyledViewButton><i class="fa-solid fa-eye"></i> Ver</StyledViewButton>
                            <StyledEditButton><i className="fa-solid fa-pen-fancy"></i> Editar</StyledEditButton>
                            <StyledDeleteButton><i className="fa-solid fa-trash-can"></i> Borrar</StyledDeleteButton>
                        </>
                    </div>

                
                        
                ))}
                
                


            </div>
            
        </>
    )
}
        
//<button onClick={() => getProducts()}>click here</button>            { 
// productService.getProducts();

export default HomePage;