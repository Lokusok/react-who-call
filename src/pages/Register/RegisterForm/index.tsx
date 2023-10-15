import React from 'react';

import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Stack, FormLabel, Typography, Link } from '@mui/material';

import Form from '../../components/Form';
import ButtonSuccess from '../../components/styled/ButtonSuccess';
import Input from '../../components/styled/Input';
import Invite from '../../components/Invite';
import Error from '../../components/Form/Error';

import { useAppDispatch } from '../../../store';

import { setRegister } from '../../../store/thunks/statuses/setRegister';
import { checkUnique } from '../../../store/thunks/user/checkUnique';
import { userRegister } from '../../../store/thunks/user/userRegister';

import { UniqueUserFields, StatusesStates } from '../../../types';

interface RegisterFormInputs {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormInputs>({
    reValidateMode: 'onSubmit',
  });

  const setErrorStatus = () => {
    dispatch(
      setRegister({
        registerStatus: StatusesStates.Error,
        showStatus: true,
      })
    );
  };

  const registerUser: SubmitHandler<RegisterFormInputs> = (data) => {
    dispatch(userRegister(data));

    reset();
    navigate('/login');
  };

  const checkUniqueField = (
    type: UniqueUserFields,
    errorMessage: string
  ): any => {
    return async (value: string) => {
      const res = await dispatch(checkUnique({ type, value })).unwrap();

      if (!res) {
        setErrorStatus();
      }

      return res ? true : errorMessage;
    };
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(registerUser)}
        method="POST"
        title={'Регистрация'}
      >
        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="email">E-mail:</FormLabel>
          <Input
            {...register('email', {
              validate: {
                checkUnique: checkUniqueField(
                  UniqueUserFields.Email,
                  'Email уже используется другим пользователем'
                ),
              },
            })}
            name="email"
            id="email"
            type="email"
            required
          />
          <Error>{errors?.email?.message}</Error>
        </Stack>

        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="username">Никнейм:</FormLabel>
          <Input
            {...register('username', {
              validate: {
                checkUnique: checkUniqueField(
                  UniqueUserFields.Username,
                  'Данный никнейм уже используется другим пользователем'
                ),
              },
              minLength: {
                value: 2,
                message: 'Минимум 2 символа',
              },
              maxLength: {
                value: 10,
                message: 'Максимум 10 символов',
              },
            })}
            name="username"
            id="username"
            type="text"
            required
          />
          <Error>{errors?.username?.message}</Error>
        </Stack>

        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="password">Пароль:</FormLabel>
          <Input
            {...register('password', {
              minLength: { value: 5, message: 'Минимум 5 символов' },
            })}
            name="password"
            id="password"
            type="password"
            required
          />
          <Error>{errors?.password?.message}</Error>
        </Stack>

        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="confirmPassword">Подтверждение пароля:</FormLabel>
          <Input
            {...register('confirmPassword', {
              validate: {
                checkIdentity: async () => {
                  let values = getValues(['password', 'confirmPassword']);
                  let res = values[0] === values[1];

                  if (!res) {
                    setErrorStatus();
                  }

                  return res ? res : 'Пароли не совпадают';
                },
              },
            })}
            name="confirmPassword"
            id="confirmPassword"
            type="password"
          />
          <Error>{errors?.confirmPassword?.message}</Error>
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
