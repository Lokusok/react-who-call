import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Box, Stack, FormLabel } from '@mui/material';

import { styled } from '@mui/material/styles';

import Form from '../../components/Form';
import Input from '../../components/styled/Input';
import ButtonSuccess from '../../components/styled/ButtonSuccess';
import ForgetSendSuccess from '../ForgetSendSuccess';

import { useAppDispatch, useAppSelector } from '../../../store';

const Wrapper = styled(Box)`
  max-width: 500px;
  margin: 0 auto;
`;

const Card = styled(Box)`
  margin-bottom: 1.5rem;
`;

interface ForgetFormInputs {
  email: string;
}

const ForgetForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<ForgetFormInputs>();

  const onSubmit: SubmitHandler<ForgetFormInputs> = (data) => {
    console.log({ formData: data });
    reset();
  };

  return (
    <Wrapper>
      <Card>
        <ForgetSendSuccess />
      </Card>

      <Form
        method="POST"
        title="Сбросить пароль"
        onSubmit={handleSubmit(onSubmit)}
      >
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
    </Wrapper>
  );
};

export default ForgetForm;
