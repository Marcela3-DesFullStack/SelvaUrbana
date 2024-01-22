// ArticuloCard.jsx
import React from 'react';
import { CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const ArticuloCard = ({ data }) => {
  const { name, photo, type, stock, price, description } = data;
  console.log('data en articuloCard' + data);

  return (
    <Card>
      <CardMedia component="img" height="140" image={photo} alt={name} />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tipo: {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {stock}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descripción: {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticuloCard;
