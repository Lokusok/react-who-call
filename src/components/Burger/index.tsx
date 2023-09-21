import React from 'react';

import { Grid, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface BurgerProps {
  onClick: React.MouseEventHandler;
}

const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  return (
    <Grid item sx={{ display: { sm: 'none' } }}>
      <IconButton
        onClick={onClick}
        aria-label="Открыть меню"
        sx={{ zIndex: 1500 }}
      >
        <MenuIcon fontSize="large" sx={{ fill: '#fff' }} />
      </IconButton>
    </Grid>
  );
};

export default Burger;
