import React from 'react';

import { Grid } from '@mui/material';

import NavLink from '../NavLink';

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
        <NavLink to="/main">Главная</NavLink>
      </Grid>

      <Grid item>
        <NavLink to="/cods">Коды номеров</NavLink>
      </Grid>
    </Grid>
  );
};

export default NavBar;
