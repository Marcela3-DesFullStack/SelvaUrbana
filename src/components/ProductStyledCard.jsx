
import styled from "styled-components";

const HomePage = styled.div `
    .card-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.2rem;
    }

`;

const ProductStyledCard = styled.div`   

    height:9.1rem;
    width: 9rem;
    background-color: #c4dc50;
    border: none;
    border-radius: 5px;
    padding: 0.3rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    
    .title-card p {
        font-size: 12px;
        font-weight:700;
        text-align: center;

                
    }

    .information-card {
        padding: 0.1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.2rem;
    }
    .information-card div {
        height: 4.7rem;
        font-size: 10px;
        font-weight: 700;
        text-align: center;
        padding: 0;
        
        
        

    }
    .button-container {
        display: flex;
        gap: 0.25rem;
        justify-content: space-evenly;
        padding: 0.2rem;

    }

    img {
        border: 1px solid #009929;
        border-radius: 0.3rem;
        width:100%;
        height: auto;
    }
  
`;


export default ProductStyledCard;