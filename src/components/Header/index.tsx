import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  AppBar,
  Container,
  Link,
  Grid,
  Menu,
  MenuList,
  MenuItem,
  Box,
} from '@mui/material';

import HeaderItems from './HeaderItems';
import Burger from '../Burger';

const Header = () => {
  const [visibleMenu, setVisibleMenu] = React.useState(false);

  const clickOnBurger = () => {
    setVisibleMenu((prevVisible) => !prevVisible);
  };

  const handleClose = () => {
    setVisibleMenu(false);
  };

  return (
    <AppBar sx={{ py: 2, position: 'fixed' }} elevation={0}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <HeaderItems />
          </Grid>

          <Grid item>
            <Link
              component={RouterLink}
              to="/login"
              fontSize="14px"
              underline="hover"
              sx={{ display: { xs: 'none', sm: 'initial' } }}
            >
              Войти
            </Link>
          </Grid>

          <Burger onClick={clickOnBurger} />
        </Grid>
      </Container>

      <Menu
        open={visibleMenu}
        PaperProps={{ style: { top: 'auto', right: 0 } }}
        MenuListProps={{ style: { padding: 0 } }}
        onClose={handleClose}
        sx={{
          '& .MuiMenu-root': { backgroundColor: 'red' },
          '& .MuiPaper-root': {
            left: '0 !important',
            maxWidth: '100% !important',
          },
          marginTop: '83px',
          height: '300px',
        }}
      >
        <MenuItem onClick={handleClose}>Главная</MenuItem>
        <MenuItem onClick={handleClose}>Список кодов</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
