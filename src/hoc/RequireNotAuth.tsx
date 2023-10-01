import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../store';

interface RequireNotAuthProps {
  children: React.ReactNode;
}

const RequireNotAuth: React.FC<RequireNotAuthProps> = ({ children }) => {
  const navigate = useNavigate();
  const loggedIn = useAppSelector((state) => state.user.loggedIn);

  if (loggedIn) {
    navigate(-1);
  }

  return children;
};

export default RequireNotAuth;
