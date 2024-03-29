import React from 'react';

import { Grid } from '@mui/material';

import NavLink from '../NavLink';

const NavBar: React.FC = () => {
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
    </Grid>
  );
};

export default NavBar;
