import React from 'react';

import { AppBar, Container, Grid } from '@mui/material';

import HeaderItems from './HeaderItems';
import Burger from './Burger';

import MobileMenu from '../MobileMenu';
import ProfileLink from './ProfileLink';

const Header = React.forwardRef((props, ref: React.Ref<HTMLElement>) => {
  const [visibleMenu, setVisibleMenu] = React.useState(false);

  const clickOnBurger = () => {
    setVisibleMenu((prevVisible) => !prevVisible);
  };

  const handleClose = () => {
    setVisibleMenu(false);
  };

  return (
    <AppBar ref={ref} sx={{ py: 2 }} position="fixed" elevation={0}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <HeaderItems />
          </Grid>

          <Grid item sx={{ display: { xs: 'none', sm: 'initial' } }}>
            <ProfileLink />
          </Grid>

          <Burger onClick={clickOnBurger} />
        </Grid>
      </Container>

      <MobileMenu visibleMenu={visibleMenu} handleClose={handleClose} />
    </AppBar>
  );
});

export default Header;
