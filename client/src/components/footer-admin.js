import React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center" style={{paddingTop: 20}}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/SHARENERGY-OFICIAL/desafio-sharenergy-2023-01">
        Desafio SHARENERGY
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }