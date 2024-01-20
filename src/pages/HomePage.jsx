import productService from "../services/productService";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faSeedling, faTrashCan, faPenToSquare, faEye, faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import App from "../App";
import StyledPageHeader from "../components/StylePageHeader";
import { StyledViewButton, StyledDeleteButton , StyledEditButton, StyledAddButton } from "../components/StyledButton";
import ProductStyledCard from "../components/ProductStyledCard";


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
            <StyledPageHeader>
                <p>Plantas para todos los gustos</p>
                <StyledAddButton><FontAwesomeIcon icon={faSquarePlus} /> Añadir Planta</StyledAddButton>

            </StyledPageHeader> 

            {products.map((product, index) => (
                 
    
                    <ProductStyledCard key={product.index}>
                        <img src={product.photo} alt={product.name} width="120" height="120"/>
                        <h2 className="display-1">{product.name}</h2>
                        <h3><FontAwesomeIcon icon={faSeedling} />{product.type}</h3>
                        <h3>${product.price}</h3>
                        <p><FontAwesomeIcon icon={faCubes} /> {product.stock} und</p>
                           
                        <>
                             
                            <StyledViewButton><FontAwesomeIcon icon={faEye} /> Ver</StyledViewButton>
                            <StyledEditButton><FontAwesomeIcon icon={faPenToSquare} /> Editar</StyledEditButton>
                            <StyledDeleteButton><FontAwesomeIcon icon={faTrashCan} /> Borrar</StyledDeleteButton>
                        </>
                    </ProductStyledCard>
                
                                        
            ))}

            
        </>
    )
}
        
//<button onClick={() => getProducts()}>click here</button>            { 
// productService.getProducts();

export default HomePage;