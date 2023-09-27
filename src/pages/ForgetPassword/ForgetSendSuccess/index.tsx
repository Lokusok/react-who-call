import React from 'react';

import { Alert } from '@mui/material';

const ForgetSendSuccess: React.FC = () => {
  return (
    <Alert severity="success">
      Мы отправили Вам письмо со ссылкой на сброс пароля.
    </Alert>
  );
};

export default ForgetSendSuccess;
