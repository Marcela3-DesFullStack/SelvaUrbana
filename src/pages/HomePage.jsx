import productService from "../services/productService";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faSeedling, faTrashCan, faPenToSquare, faEye, faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import App from "../App";

import StyledPageHeader from "../components/StylePageHeader";
import { StyledViewButton, StyledDeleteButton , StyledEditButton, StyledAddButton } from "../components/StyledButton";
import ProductStyledCard from "../components/ProductStyledCard";
import StyledCardContainer from "../components/StyledCardContainer";



const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        getProducts();
        
    }, []);

    async function getProducts() {
        let data = await productService.getProducts();
        setProducts(data);
    }
    async function deleteProduct(Id) {
        let data = await productService.deleteProduct(Id);
        setProducts(data);
        console.log(data);
    }


    return (

        <>

            <StyledPageHeader>
                <p>Plantas para todos los gustos</p>
                <StyledAddButton><FontAwesomeIcon icon={faSquarePlus} /> Añadir Planta</StyledAddButton>

            </StyledPageHeader> 

            
            <StyledCardContainer div className="card-container">
                {products.map((product, index) => (
                 
    
                    <ProductStyledCard key={product.index}>
                        <div className="title-card">
                            <p>{product.name}</p>
                            
                        </div>
                        <div className="information-card">
                            <img src={product.photo} alt={product.name} />
                            <div>
                                <p><FontAwesomeIcon icon={faSeedling} />{product.type}</p>
                                <p>${product.price}</p>
                                <p><FontAwesomeIcon icon={faCubes} /> {product.stock} und</p>
                            </div>
                        </div>
                         <div className="button-container">
                             
                            <StyledViewButton><FontAwesomeIcon icon={faEye} /> Ver</StyledViewButton>
                            <StyledEditButton><FontAwesomeIcon icon={faPenToSquare} /> Editar</StyledEditButton>
                            <StyledDeleteButton onClick={() => deleteProduct(1)}><FontAwesomeIcon icon={faTrashCan} /> Borrar</StyledDeleteButton>
                        </div>
                    </ProductStyledCard>
                
                                        
                 ))}
            </StyledCardContainer>
            
        </>
    )
}
        
//<button onClick={() => getProducts()}>click here</button>            { 
// productService.getProducts();

export default HomePage;