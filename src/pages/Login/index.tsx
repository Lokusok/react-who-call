import React from 'react';

import LoginForm from './LoginForm';
import Enter from '../components/Enter';

const Login: React.FC = () => {
  return (
    <Enter>
      <LoginForm />
    </Enter>
  );
};

export default Login;
