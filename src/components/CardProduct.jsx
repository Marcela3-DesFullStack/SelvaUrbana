import React from 'react';

const CardProduct = () => {
  const editar = () => {
    // Lógica para editar
    console.log('Editar');
  };

  const comentar = () => {
    // Lógica para comentar
    console.log('Comentar');
  };

  const eliminar = () => {
    // Lógica para eliminar
    console.log('Eliminar');
  };

  return (
    <div className="p-3 m-0 border-0 bd-example m-0 border-0">
      <div style={{ width: '18rem', height: '26.5rem' }}>
        <div className="card">
          <img src="https://www.clara.es/medio/2022/03/16/plantas-de-interior-bonitas_ad98ca6d_1280x720.jpg"
            className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text h4">Planta de elefante.</p>
            <p><i className="fa-solid fa-folder-tree"></i> Planta de interior</p>
            <p><i className="fa-solid fa-cubes"></i> Stock 12 unidades</p>
            <p><i className="fa-solid fa-euro-sign"></i> PVP: 32 euros</p>
          </div>
        </div>
        <div className="container d-flex justify-content-evenly mt-4">
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={editar}>
            <i className="fa-regular fa-pen-to-square"></i> Editar
          </button>
          <button type="button" className="btn btn-outline-secondary btn-sm" onClick={comentar}>
            <i className="fa-regular fa-eye"></i> Visualizar
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={eliminar}>
            <i className="fa-regular fa-trash-can"></i> Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
