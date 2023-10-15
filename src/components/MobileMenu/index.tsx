import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Menu, MenuItem, Link } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../store';
import { userLogout } from '../../store/thunks/user/userLogout';

interface MobileMenuProps {
  visibleMenu: boolean;
  handleClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  visibleMenu,
  handleClose,
}) => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.user.loggedIn);

  const handleLogout = () => {
    dispatch(userLogout());
    handleClose();
  };

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
      <Link component={RouterLink} to="/main" color="black">
        <MenuItem onClick={handleClose}>Главная</MenuItem>
      </Link>
      <>
        {isLoggedIn ? (
          <Link color="black">
            <MenuItem onClick={handleLogout}>Выйти</MenuItem>
          </Link>
        ) : (
          <Link component={RouterLink} to="/login" color="black">
            <MenuItem onClick={handleClose}>Войти</MenuItem>
          </Link>
        )}
      </>
    </Menu>
  );
};

export default MobileMenu;
