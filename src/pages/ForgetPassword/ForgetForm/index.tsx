import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Box, Stack, FormLabel, Skeleton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Form from '../../components/Form';
import Input from '../../components/styled/Input';
import ButtonSuccess from '../../components/styled/ButtonSuccess';
import ForgetSendSuccess from '../ForgetSendSuccess';
import ForgetSendError from '../ForgetSendError';

import { useAppDispatch, useAppSelector } from '../../../store';

import { sendResetPassword } from '../../../store/thunks/mail/sendResetPassword';

const Card = styled(Box)`
  margin-bottom: 1.5rem;
`;

interface ForgetFormInputs {
  email: string;
}

const ForgetForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSended = useAppSelector((state) => state.mail.resetPassword.isSended);
  const userUndefined = useAppSelector(
    (state) => state.mail.resetPassword.userUndefined
  );
  const { register, handleSubmit, reset } = useForm<ForgetFormInputs>();

  const onSubmit: SubmitHandler<ForgetFormInputs> = (data) => {
    dispatch(sendResetPassword({ email: data.email }));
    reset();
  };

  if (isSended === null) {
    return <Skeleton variant="rounded" width="100%" height={250} />;
  }

  return (
    <>
      {isSended ? (
        <Card>
          <ForgetSendSuccess>
            Мы отправили Вам письмо с ссылкой на сброс пароля.
          </ForgetSendSuccess>
        </Card>
      ) : (
        <>
          {userUndefined && (
            <Card>
              <ForgetSendError>
                Пользователь с таким email не найден.
              </ForgetSendError>
            </Card>
          )}

          <Form
            method="POST"
            title="Сбросить пароль"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack direction="column" spacing={1}>
              <FormLabel htmlFor="email">E-mail:</FormLabel>
              <Input {...register('email')} type="email" required />
            </Stack>

            <Stack>
              <ButtonSuccess
                type="submit"
                variant="contained"
                width="45%"
                alignLeft
              >
                Отправить
              </ButtonSuccess>
            </Stack>
          </Form>
        </>
      )}
    </>
  );
};

export default ForgetForm;
