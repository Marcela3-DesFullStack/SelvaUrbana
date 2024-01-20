// import React from 'react';
// import { Button, Typography } from '@mui/material';

// const BotonMaterial = () => {
//   return (
//     <div>
//       <Typography variant="h5">Carga ventana modal</Typography>
//       <Button variant="contained" color="primary">Visualizar ventana modal</Button>
//     </div>
//   );
// };


import React from 'react';
import { Button } from '@mui/material';

const BotonMaterial = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Abrir Modal
    </Button>
  );
};

export default BotonMaterial;
