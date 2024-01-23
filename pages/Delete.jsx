import React, { useState } from 'react';
const Delete = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    // ... otros productos
  ]);

  const handleDelete = (productId) => {
    // Filtrar los productos para eliminar el que tenga el ID dado
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>Marketplace</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => handleDelete(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Delete;
