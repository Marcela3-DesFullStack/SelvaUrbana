import { useState, useEffect } from "react";
import {useNavigate, useLocation} from "react-router-dom"
import { plantData} from "../components/Plant"

const Update = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [description, setDescription] = useState('');
    const [type, setType] = useState('indoor');
    const [isPending, setIsPending] = useState(false)
    
    const navigate = useNavigate()

    console.log("cero patatero")

    

    const handleSubmit = (e) => {
        e.preventDefault()
        const plant = {name, price, stock, description, type} 

        setIsPending(true);
        
        fetch('http://localhost:3001/products',{  
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(plant)
        })
        .then (() => {
            console.log('planta actualizada ');
            setIsPending(false);
            navigate('/')
        })
    }

    return (
        <div className="create">
            <h2>Actualizar Planta</h2>
            <form onSubmit={handleSubmit }>
                <label>Nombre de la planta</label>
                <input type="text " 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Precio</label>
                <input type="text" 
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>Cantidad</label>
                <input type="text " 
                    required
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
                <label>Descripción</label>
                <textarea 
                    required
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                >              
                </textarea> 
                <label>Interior / Exterior</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="indoor">Interior</option>
                    <option value="outdoor">Exterior</option>
                </select>
                {!isPending && <button>Actualizar</button>}
                {isPending && <button disabled >update plant...</button>}
            </form>
        </div>
     );
}
 
export default Update; 