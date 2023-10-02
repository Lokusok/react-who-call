import React from 'react';

import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

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
import Error from '../../components/Form/Error';

import ButtonSuccess from '../../components/styled/ButtonSuccess';
import Input from '../../components/styled/Input';

import { useAppDispatch } from '../../../store';
import { userLogin } from '../../../store/thunks/user/userLogin';

import useHideStatusByDefault from '../../../hooks/useHideStatusByDefault';

import { TypesOfStatuses } from '../../../types';

const CustomCheckbox = styled(Checkbox)`
  padding: 0;
  padding-right: 7px;
`;

interface LoginFormInputs {
  email: string;
  password: string;
  remember: string;
}

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    reValidateMode: 'onBlur',
  });

  const loginUser: SubmitHandler<LoginFormInputs> = async (data) => {
    const result = await dispatch(
      userLogin({
        email: data.email,
        password: data.password,
        remember: Boolean(data.remember),
      })
    ).unwrap();
  };

  useHideStatusByDefault({ dispatch, type: TypesOfStatuses.Login });

  return (
    <>
      <Form onSubmit={handleSubmit(loginUser)} method="POST" title={'Войти'}>
        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="email">E-mail:</FormLabel>
          <Input
            {...register('email')}
            name="email"
            id="email"
            type="email"
            required
          />
        </Stack>

        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="password">Пароль:</FormLabel>
          <Input
            {...register('password')}
            name="password"
            id="password"
            type="password"
            required
          />
        </Stack>

        <FormControlLabel
          control={<CustomCheckbox {...register('remember')} />}
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
