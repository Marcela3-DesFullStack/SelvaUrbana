// ModalInformation.js
import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import './ModalInformation.css';

const ModalInformation = ({ isOpen, handleClose }) => {
  // Estados para los campos del formulario
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [type, setType] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Puedes hacer lo que necesites con los datos del formulario aquí
    console.log('Datos del formulario:', { name, photo, type, stock, price, description });
    // Cerrar la ventana modal después de enviar el formulario
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="modal-container">
        <h2 id="modal-title">Formulario</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Foto"
            variant="outlined"
            fullWidth
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <TextField
            label="Tipo"
            variant="outlined"
            fullWidth
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <TextField
            label="Stock"
            variant="outlined"
            fullWidth
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <TextField
            label="Precio"
            variant="outlined"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="Descripción"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Cancelar
        </Button>
      </div>
    </Modal>
  );
};

export default ModalInformation;
