import React from 'react';

import { VKShareButton } from 'react-share';
import VkIcon from '../../../../assets/icons/vks.svg';

import { Box, Typography, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled as styledMui } from '@mui/material/styles';

import styled from 'styled-components';

const Wrapper = styledMui(Box)`
  border: 1px solid ${grey[400]};
  border-radius: 5px;
  padding: 1rem;
`;

const Title = styledMui(Typography)`
  margin-bottom: 0.5rem;
  font-size: 15px;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

interface ShareActionsProps {
  telNumber: string;
}

const ShareActions: React.FC<ShareActionsProps> = ({ telNumber }) => {
  return (
    <Wrapper>
      <Title>Поделиться информацией о номере:</Title>

      <Stack direction="row" spacing={2}>
        <VKShareButton
          url={window.location.href}
          title={`Делюсь информацией о номере: ${telNumber}`}
        >
          <Icon src={VkIcon} />
        </VKShareButton>
      </Stack>
    </Wrapper>
  );
};

export default ShareActions;
