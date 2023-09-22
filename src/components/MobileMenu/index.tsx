import React from 'react';

import { Menu, MenuItem } from '@mui/material';

interface MobileMenuProps {
  visibleMenu: boolean;
  handleClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  visibleMenu,
  handleClose,
}) => {
  return (
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
  );
};

export default MobileMenu;
