import React from 'react';

import { AlertColor } from '@mui/material';

import { StatusesStates } from '../../types';

import { useAppSelector } from '../../store';

import Status from '../../pages/components/Form/Status';

const severities: Record<StatusesStates, string | null> = {
  [StatusesStates.Success]: 'success',
  [StatusesStates.Error]: 'error',
  [StatusesStates.Default]: 'info',
};

const statusTexts: Record<string, Record<StatusesStates, string | null>> = {
  register: {
    [StatusesStates.Success]: 'Регистрация прошла успешно',
    [StatusesStates.Error]: 'При регистрации произошла ошибка',
    [StatusesStates.Default]: null,
  },
  login: {
    [StatusesStates.Success]: 'Авторизация прошла успешно',
    [StatusesStates.Error]: 'При авторизации произошла ошибка',
    [StatusesStates.Default]: null,
  },
  logout: {
    [StatusesStates.Success]: 'Вы успешно вышли из аккаунта',
    [StatusesStates.Error]: 'При выходе из аккаунта произошла ошибка',
    [StatusesStates.Default]: null,
  },
};

interface IStatusObj {
  type: string;
  status: StatusesStates;
}

interface IGetStatusValueReturn {
  status: StatusesStates | null;
  statusText: string | null;
}

const getStatusValue = (...statuses: IStatusObj[]): IGetStatusValueReturn => {
  const statusesWillShow = statuses.filter(
    (statusObj) => statusObj.status !== StatusesStates.Default
  );
  const firstStatusObj = statusesWillShow[0];

  if (!firstStatusObj) {
    return { status: null, statusText: null };
  }

  const statusText = statusTexts[firstStatusObj.type][firstStatusObj.status];
  const status = firstStatusObj.status;

  return { status, statusText };
};

const StatusLayer: React.FC = () => {
  const { status: statusRegister, showStatus: showStatusRegister } =
    useAppSelector((state) => state.status.register);
  const { status: statusLogin, showStatus: showStatusLogin } = useAppSelector(
    (state) => state.status.login
  );
  const { status: statusLogout, showStatus: showStatusLogout } = useAppSelector(
    (state) => state.status.logout
  );

  const showStatus: boolean =
    showStatusRegister || showStatusLogin || showStatusLogout;
  const statusValue = getStatusValue(
    { type: 'register', status: statusRegister },
    { type: 'login', status: statusLogin },
    { type: 'logout', status: statusLogout }
  );

  const severity = severities[
    statusValue.status || StatusesStates.Default
  ] as AlertColor;
  const text = statusValue.statusText;

  return (
    <Status open={showStatus} severity={severity}>
      {text}
    </Status>
  );
};

export default StatusLayer;
