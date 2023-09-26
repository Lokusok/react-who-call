import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import {
  Typography,
  FormLabel,
  Stack,
  FormControlLabel,
  Checkbox,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import Form from '../../components/Form';
import Invite from '../../components/Invite';

import ButtonSuccess from '../../components/styled/ButtonSuccess';
import Input from '../../components/styled/Input';

const CustomCheckbox = styled(Checkbox)`
  padding: 0;
  padding-right: 7px;
`;

const LoginForm: React.FC = () => {
  return (
    <>
      <Form method="POST" title={'Войти'}>
        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="email">E-mail:</FormLabel>
          <Input name="email" id="email" type="email" required />
        </Stack>

        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="password">Пароль:</FormLabel>
          <Input name="password" id="password" type="password" required />
        </Stack>

        <FormControlLabel
          control={<CustomCheckbox />}
          label={<Typography>Запомнить меня</Typography>}
        />

        <Stack>
          <ButtonSuccess variant="contained" type="submit">
            Войти
          </ButtonSuccess>
        </Stack>

        <Stack>
          <Link
            component={RouterLink}
            to="/forget_password"
            color="primary"
            underline="hover"
          >
            Забыли пароль?
          </Link>
        </Stack>
      </Form>

      <Invite>
        <Typography>
          Еще нет аккаунта?&nbsp;
          <Link
            component={RouterLink}
            to="/register"
            color="primary"
            underline="hover"
          >
            Зарегистрируйтесь
          </Link>
        </Typography>
      </Invite>
    </>
  );
};

export default LoginForm;
