import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'


const Plant = ({plants}) => {
    
    const navigate = useNavigate();

    async function handleEdit(id) {
        
    }

    async function handleDelete (id) {
        
        try {
            console.log('Deleting plant with ID:', id);
            const response = await fetch('http://localhost:3001/products/'+ id, {
                method: 'DELETE'
    
        });
            if (response.ok) {
                
                console.log(`Plant with ID ${id} deleted successfully`);
                window.location.reload();
                navigate('./'); 
            } else {
                console.error(`Error deleting plant with ID ${id}`);
            }
            
        } catch (error) {
          console.error("Error deleting plant:", error);
        }
      };
    
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
                        <button className='actionBtn'>Ver</button>
                        </Link>
                        <button className='actionBtn' onClick={() => handleEdit(plant.id)}>Editar</button>
                        <button className='actionBtn' onClick={() => handleDelete(plant.id)}>Borrar</button>
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