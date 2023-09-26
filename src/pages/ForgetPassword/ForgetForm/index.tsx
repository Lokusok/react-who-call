import React from 'react';

import { Stack, FormLabel, Typography, Link } from '@mui/material';

import Form from '../../components/Form';
import Input from '../../components/styled/Input';
import ButtonSuccess from '../../components/styled/ButtonSuccess';

const ForgetForm: React.FC = () => {
  return (
    <>
      <Form method="POST" title="Сбросить пароль">
        <Stack direction="column" spacing={1}>
          <FormLabel htmlFor="email">E-mail:</FormLabel>
          <Input name="email" id="email" type="email" required />
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
  );
};

export default ForgetForm;
