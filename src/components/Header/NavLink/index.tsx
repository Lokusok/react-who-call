import React from 'react';

import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      component={RouterLink}
      to={to}
      underline="hover"
      fontSize="14px"
      sx={{
        transition: 'opacity ease .2s',
        '&:hover': { opacity: 0.8 },
        '&:active': { opacity: 0.5, textDecoration: 'none' },
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
