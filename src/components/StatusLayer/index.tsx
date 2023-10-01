import React from 'react';

import { AlertColor } from '@mui/material';

import { StatusesStates } from '../../types';

import { useAppSelector } from '../../store';

import Status from '../../pages/components/Form/Status';

const severities = {
  register: {
    [StatusesStates.Success]: 'success',
    [StatusesStates.Error]: 'error',
    [StatusesStates.Default]: 'info',
  },
};

const statusTexts = {
  register: {
    [StatusesStates.Success]: 'Регистрация прошла успешно',
    [StatusesStates.Error]: 'При регистрации произошла ошибка',
    [StatusesStates.Default]: null,
  },
};

const getStatusValue = (...statuses: StatusesStates[]) => {
  return statuses.filter((status) => status !== 'default')[0];
};

const StatusLayer: React.FC = () => {
  const { status: statusRegister, showStatus: showStatusRegister } =
    useAppSelector((state) => state.status.register);
  const { status: statusLogin, showStatus: showStatusLogin } = useAppSelector(
    (state) => state.status.login
  );

  const showStatus: boolean = showStatusRegister || showStatusLogin;
  const statusValue = getStatusValue(statusRegister, statusLogin);

  const severity = severities.register[statusValue] as AlertColor;
  const text = statusTexts.register[statusValue];

  return (
    <Status open={showStatus} severity={severity}>
      {text}
    </Status>
  );
};

export default StatusLayer;
