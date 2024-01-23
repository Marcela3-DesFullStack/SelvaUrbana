import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

const Plant = ({plants}) => {
    
    const navigate = useNavigate();

    const {id} = useParams();
    const handleClick = ()=> {
        fetch('http://localhost:3001/products/'+ id,{
            method: 'DELETE'
        })
        .then(() => {
            navigate('./')
        })
    }
    return (
        <div className='plant-list'>
            {plants.map((plant) => (
                <div className="card" key={plant.id}>
                    <h3 className='cardName'>{plant.name}</h3>
                    <Link to={plant.id}>                   
                    <img src={plant.photo} alt="" className='plantImg'/>
                    </Link>
                    <div className="buttonContainer">
                        <Link to={plant.id}>
                        <button className='actionBtn'>view</button>
                        </Link>
                        <button className='actionBtn'>edit</button>
                        <button className='actionBtn'>delete</button>
                    </div>

                    <img src={plant.type} alt="" className='interiorPlant'/>
                    <p className="stock">{plant.stock} <br />stock</p>
                    <p className="price">{plant.price} €</p>
             
                </div>
            ))}
        </div>
    );  
}
 
export default Plant;