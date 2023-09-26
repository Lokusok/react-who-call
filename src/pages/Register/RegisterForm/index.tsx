import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { Stack, FormLabel, Typography, Link } from '@mui/material';

import Form from '../../components/Form';
import ButtonSuccess from '../../components/styled/ButtonSuccess';
import Input from '../../components/styled/Input';
import Invite from '../../components/Invite';

const RegisterForm: React.FC = () => {
  return (
    <>
      <Form method="POST" title={'Регистрация'}>
        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="email">E-mail:</FormLabel>
          <Input name="email" id="email" type="email" required />
        </Stack>

        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="username">Никнейм:</FormLabel>
          <Input name="username" id="username" type="text" required />
        </Stack>

        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="password">Пароль:</FormLabel>
          <Input name="password" id="password" type="password" required />
        </Stack>

        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="confirm-password">
            Подтверждение пароля:
          </FormLabel>
          <Input
            name="confirm-password"
            id="confirm-password"
            type="password"
            required
          />
        </Stack>

        <Stack>
          <ButtonSuccess variant="contained" type="submit">
            Регистрация
          </ButtonSuccess>
        </Stack>
      </Form>

      <Invite>
        <Typography>
          Уже есть аккаунт?&nbsp;
          <Link
            component={RouterLink}
            to="/login"
            color="primary"
            underline="hover"
          >
            Войдите
          </Link>
        </Typography>
      </Invite>
    </>
  );
};

export default RegisterForm;
