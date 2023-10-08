import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { Box, Stack, Link, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import CommentsCount from '../../CommentsCount';

import { CallTypesEnum } from '../../../types';

interface NewCommentProps {
  telNumber: string;
  type: CallTypesEnum;
  telCommentsCount: number;
  description: string;
}

const NewComment: React.FC<NewCommentProps> = ({
  telNumber,
  type,
  telCommentsCount,
  description,
}) => {
  return (
    <Box sx={{ border: `1px solid ${grey[400]}`, borderRadius: '5px' }}>
      <Box
        sx={{
          padding: '0.5rem 0.7rem',
          borderBottom: `1px solid ${grey[400]}`,
        }}
      >
        <Stack direction="row" spacing={1.5} justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <Link
              component={RouterLink}
              to={`/tel/${telNumber}`}
              color="primary"
              underline="hover"
              fontSize={13}
            >
              {telNumber}
            </Link>

            <Typography color={grey[400]} fontSize={13}>
              {type}
            </Typography>
          </Stack>

          <CommentsCount count={telCommentsCount as number} />
        </Stack>
      </Box>

      <Box sx={{ padding: '0.5rem 0.7rem' }}>
        <Typography fontSize={13}>{description}</Typography>
      </Box>
    </Box>
  );
};

export default NewComment;
