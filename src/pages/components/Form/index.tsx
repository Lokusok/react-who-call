import React from 'react';

import { StatusesStates } from '../../../types';

import { Box, Typography, Stack, AlertColor } from '@mui/material';
import { grey } from '@mui/material/colors';

import { styled } from 'styled-components';

import Status from './Status';

import { useAppSelector } from '../../../store';

const Wrapper = styled.form`
  border: 1px solid ${grey[300]};
  border-radius: 5px;
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto;
`;

const Header = styled(Box)`
  background-color: ${grey[100]};
  padding: 12px 20px;
  border-bottom: 1px solid ${grey[300]};
`;

const Body = styled(Box)`
  padding: 12px 20px;
  padding-bottom: 25px;
`;

interface FormProps {
  onSubmit: any;
  method: string;
  title: string;
  children: React.ReactNode;
}

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

const Form: React.FC<FormProps> = ({ onSubmit, method, title, children }) => {
  const { status: statusRegister, showStatus: showStatusRegister } =
    useAppSelector((state) => state.status.register);
  const { status: statusLogin, showStatus: showStatusLogin } = useAppSelector(
    (state) => state.status.login
  );

  const showStatus: boolean = showStatusRegister || showStatusLogin;

  const severity = severities.register[
    statusRegister || statusLogin
  ] as AlertColor;
  const text = statusTexts.register[statusRegister || statusLogin];

  return (
    <>
      <Status open={showStatus} severity={severity}>
        {text}
      </Status>

      <Wrapper onSubmit={onSubmit} method={method}>
        <Header>
          <Typography fontWeight={700}>{title}</Typography>
        </Header>

        <Body>
          <Stack direction="column" spacing={3}>
            {children}
          </Stack>
        </Body>
      </Wrapper>
    </>
  );
};

export default Form;
