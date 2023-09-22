import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Link, Box } from '@mui/material';

import Logo from '../../Logo';
import NavBar from '../NavBar';

const HeaderItems = () => {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item>
        <Box>
          <Link component={RouterLink} to="/">
            <Logo />
          </Link>
        </Box>
      </Grid>

      <Grid item>
        <NavBar />
      </Grid>
    </Grid>
  );
};

export default HeaderItems;
