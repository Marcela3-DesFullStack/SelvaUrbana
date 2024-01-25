import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";



const Update = () =>  {
    const [data, setData] = useState({
        name: "",
        stock: "",
        price: "",
        description: "",
        type: "/icons/indoor_icon.svg",
        photo: ""

    });
    const {id} = useParams();
    const url = `http://localhost:3001/products/${id}`

    useEffect(() => {

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    setData(data)
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
},[url])

const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url,{  
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then (() => {
            console.log('plant edited ');
            navigate('/')
        })
}

const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setData({ ...data, photo: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
    
    return (
        <div className="create">  
        <form onSubmit={handleSubmit }>
            <label>Nombre</label>
            <input type="text " 
                required
                value={data.name}
                onChange={(e) => setData({...data, name: e.target.value})}
            />
            <label>Imagen</label>
            <input type="file"
                
                onChange={handleImageChange} />
                {data.photo && <img src={data.photo} alt="Planta Seleccionada" style={{width:'200px'}}/>}

            <label>Precio</label>
            <input type="text" 
                required
                value={data.price}
                onChange={(e) => setData({...data, price: e.target.value})}
            />
            <label>Stock</label>
            <input type="text " 
                required
                value={data.stock}
                onChange={(e) => setData({...data, stock: e.target.value})}
            />
            <label>Descripción</label>
            <textarea 
                required
                value={data.description}
                onChange={(e) => setData({...data, description: e.target.value})}
            >              
            </textarea> 
            <label>interior/exterior</label>
            <select
                value={data.type}
                onChange={(e) => setData({...data, type: e.target.value})}
            >
                <option value="/icons/indoor_icon.svg">interior</option>
                <option value="/icons/outdoor_icon.svg">exterior</option>
            </select>
            <button>actualizar</button>
        </form>
    </div>
 );
}


export default Update

