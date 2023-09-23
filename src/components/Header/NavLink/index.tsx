import React from 'react';

import { NavLink as RouterLink } from 'react-router-dom';

import { Link } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const MyNavLink = React.forwardRef<any, any>((props, ref) => {
  const handleActive = (status: { isActive: boolean; isPending: boolean }) => {
    if (status.isActive) {
      return `${props.className} active`;
    }

    return props.className;
  };

  return (
    <RouterLink ref={ref} className={handleActive} {...props}>
      {props.children}
    </RouterLink>
  );
});

const StyledLink = styled(MyNavLink)`
  &.active {
    text-decoration: underline !important;
    text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3),
      0px -4px 10px rgba(255, 255, 255, 0.3);
  }
`;

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
  color?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, color }) => {
  return (
    <Link
      component={StyledLink}
      to={to}
      underline="hover"
      fontSize="14px"
      color={color}
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
