import { useState } from "react";
import {useNavigate} from "react-router-dom"
import ImageUploader from '../components/ImageUploader';



const Create = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [description, setDescription] = useState('');
    const [type, setType] = useState('indoor');
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    //"photo":"/photos/Costilla.webp",

    const handleSubmit = (e) => {
        e.preventDefault()
        const plant = {name, price, stock, description, type} 

        setIsPending(true);
        
        fetch('http://localhost:3001/products',{  
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(plant)
        })
        .then (() => {
            console.log('new plant added ');
            setIsPending(false);
            navigate('/')
        })
    }

    

   




    return (
        <div className="create">
            <h2>add a new plant</h2>
            <form onSubmit={handleSubmit }>
                <label>plant name</label>
                <input type="text " 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><div>
                     <h1>Image Uploader</h1>
                        <ImageUploader />
                </div>




                <label>price</label>
                <input type="text" 
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>quantity</label>
                <input type="text " 
                    required
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
                <label>description</label>
                <textarea 
                    required
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                >              
                </textarea> 
                <label>indoor/outdoor</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="/icons/indoor_icon.svg">indoor</option>
                    <option value="/icons/outdoor_icon.svg">outdoor</option>
                </select>
                {!isPending && <button>add plant</button>}
                {isPending && <button disabled >adding plant...</button>}
            </form>
        </div>
     );
}
 
export default Create; 