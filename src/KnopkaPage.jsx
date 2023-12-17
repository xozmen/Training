import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const KnopkaPage = () => {
  return (
    <div className='knopka2'>
      <Link to="/stranica">
        <Button variant="contained">Go to Stranica</Button>
      </Link>
    </div>
  );
};

export default KnopkaPage;
