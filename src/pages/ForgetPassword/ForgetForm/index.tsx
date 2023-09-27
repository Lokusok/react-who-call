import React from 'react';

import { Box, Stack, FormLabel } from '@mui/material';

import { styled } from '@mui/material/styles';

import Form from '../../components/Form';
import Input from '../../components/styled/Input';
import ButtonSuccess from '../../components/styled/ButtonSuccess';
import ForgetSendSuccess from '../ForgetSendSuccess';

const Wrapper = styled(Box)`
  max-width: 500px;
  margin: 0 auto;
`;

const Card = styled(Box)`
  margin-bottom: 1.5rem;
`;

const ForgetForm: React.FC = () => {
  return (
    <Wrapper>
      <Card>
        <ForgetSendSuccess />
      </Card>

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
    </Wrapper>
  );
};

export default ForgetForm;
