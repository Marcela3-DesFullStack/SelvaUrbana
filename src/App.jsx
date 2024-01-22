import React, { useState } from 'react';
import './App.css';
import CardProduct from './components/Card';
import ModalWindow from './components/ModalWindow';


const App = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <>
      <CardProduct/>
      {/* <ModalWindow /> */}
      {modalAbierto && (
        <ModalWindow onClose={cerrarModal} />
      )}
    </>
  );
};

export default App;
