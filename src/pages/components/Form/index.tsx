import React from 'react';

import { Box, Typography, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';

import { styled } from 'styled-components';

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
  method: string;
  title: string;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ method, title, children }) => {
  return (
    <Wrapper method={method}>
      <Header>
        <Typography fontWeight={700}>{title}</Typography>
      </Header>

      <Body>
        <Stack direction="column" spacing={3}>
          {children}
        </Stack>
      </Body>
    </Wrapper>
  );
};

export default Form;
