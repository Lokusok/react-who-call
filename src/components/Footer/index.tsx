import React from 'react';

import { Container, Box, Grid, Typography, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';

import NavLink from '../Header/NavLink';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{ marginTop: '2rem', padding: '2rem 0', backgroundColor: grey[100] }}
    >
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Stack direction="row" spacing={3}>
              <NavLink to="/rules" color="primary">
                Правила
              </NavLink>
              <NavLink to="/contacts" color="primary">
                Контакты
              </NavLink>
            </Stack>
          </Grid>

          <Grid item>
            <Typography fontSize={13} color={grey[500]}>
              zvonili.com {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
