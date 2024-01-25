import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import App from "../App"


const Edit = () => {

    const navigate = useNavigate();

  const { id } = useParams(); // Obtén el parámetro de la URL

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setName(data.name);
        setPrice(data.price);
        setStock(data.stock);
        setDescription(data.description);
        setType(data.type);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realiza la solicitud PUT para actualizar los datos
    try {
      setIsPending(true);

      const response = await fetch(`http://localhost:3001/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          price,
          stock,
          description,
          type,
        }),
      });

      if (response.ok) {
        console.log('Actualización exitosa');
        // Puedes redirigir a la página de detalles u otra página después de la actualización
        // navigate(`/details/${id}`);
      } else {
        console.error('Error al actualizar los datos');
      }
    } catch (error) {
      console.error('Error en la solicitud PUT:', error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="create">
      <h2>Edit Plant</h2>
      <Link to="/create">Crear nueva planta</Link>
      <form onSubmit={handleSubmit}>
        {/* Resto del formulario con los campos prellenados */}
        <label>plant name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>price</label>
        <input
          type="text"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>quantity</label>
        <input
          type="text"
          required
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <label>description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>indoor/outdoor</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="indoor">indoor</option>
          <option value="outdoor">outdoor</option>
        </select>
        {!isPending && <button>Update plant</button>}
        {isPending && <button disabled>Updating plant...</button>}
      </form>
    </div>
  );
};

export default Edit;
