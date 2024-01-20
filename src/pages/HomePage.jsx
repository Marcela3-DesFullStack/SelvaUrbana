import AddButton from "../components/AddButton";
import productService from "../services/productService";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons"
import { faSeedling } from "@fortawesome/free-solid-svg-icons"
import { faTrashCan} from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons"
import { faEye} from "@fortawesome/free-solid-svg-icons"
import App from "../App";
import Header from "./Header";
import { StyledViewButton, StyledDeleteButton , StyledEditButton } from "../components/StyledButton";
import StyledCard from "../components/StyledCard";





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

            <StyledCard className="container-card">

                {products.map((product, index) => (
                                              
                        
                    <div key={product.index}>
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
                    </div>

                
                        
                ))}
                
                


            </StyledCard>
            
        </>
    )
}
        
//<button onClick={() => getProducts()}>click here</button>            { 
// productService.getProducts();

export default HomePage;