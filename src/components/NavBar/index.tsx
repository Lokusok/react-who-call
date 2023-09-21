import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Link } from '@mui/material';

const NavBar = () => {
  return (
    <Grid
      container
      component="nav"
      spacing={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'flex',
        },
      }}
    >
      <Grid item>
        <Link
          component={RouterLink}
          to="/main"
          underline="hover"
          fontSize="14px"
          sx={{
            transition: 'opacity ease .2s',
            '&:hover': { opacity: 0.8 },
            '&:active': { opacity: 0.5, textDecoration: 'none' },
          }}
        >
          Главная
        </Link>
      </Grid>

      <Grid item>
        <Link
          component={RouterLink}
          to="/cods"
          underline="hover"
          fontSize="14px"
          sx={{
            transition: 'opacity ease .2s',
            '&:hover': { opacity: 0.8 },
            '&:active': { opacity: 0.5, textDecoration: 'none' },
          }}
        >
          Коды номеров
        </Link>
      </Grid>
    </Grid>
  );
};

export default NavBar;
