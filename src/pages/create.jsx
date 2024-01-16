import React, { useEffect, useState } from 'react';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/usuarios');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;