import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Stack, FormLabel } from '@mui/material';

import Form from '../../components/Form';
import Input from '../../components/styled/Input';
import ButtonSuccess from '../../components/styled/ButtonSuccess';
import Error from '../../components/Form/Error';

import { useAppDispatch } from '../../../store';

import { checkPasswordToken } from '../../../store/thunks/user/checkPasswordToken';
import { changePassword } from '../../../store/thunks/user/changePassword';

interface ResetPasswordInputs {
  password: string;
}

const ResetPassword: React.FC = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const { token } = useParams<{ token?: string }>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetPasswordInputs>();

  const onSubmit: SubmitHandler<ResetPasswordInputs> = (data) => {
    if (!token) {
      return navigate('/');
    }

    dispatch(changePassword({ newPassword: data.password, token }));

    reset();
    return navigate('/login');
  };

  React.useEffect(() => {
    const resetPasswordEffect = async () => {
      if (!token) {
        return;
      }

      const isExist = await dispatch(checkPasswordToken({ token })).unwrap();

      if (!isExist) {
        return navigate('/');
      }
    };

    resetPasswordEffect();
  }, [token]);

  return (
    <Form
      method="POST"
      title="Изменить пароль"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction="column" spacing={1}>
        <FormLabel htmlFor="email">Новый пароль:</FormLabel>
        <Input
          {...register('password', {
            minLength: { value: 5, message: 'Минимум 5 символов' },
          })}
          type="password"
          required
        />
        <Error>{errors?.password?.message}</Error>
      </Stack>

      <Stack>
        <ButtonSuccess type="submit" variant="contained" width="45%" alignLeft>
          Изменить
        </ButtonSuccess>
      </Stack>
    </Form>
  );
};

export default ResetPassword;
