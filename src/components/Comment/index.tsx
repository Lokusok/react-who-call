import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { Typography, Box, Grid, Avatar, Link, Stack } from '@mui/material';
import { deepOrange, grey } from '@mui/material/colors';

import { IComment } from '../../types';

import ViewsCount from '../ViewsCount';
import CommentsCount from '../CommentsCount';

interface CommentProps extends IComment {}

const Comment: React.FC<CommentProps> = ({
  username,
  date,
  time,
  telNumber,
  viewsCount,
  commentsCount,
  description,
  category,
}) => {
  return (
    <Box
      sx={{
        borderRadius: '5px',
        overflow: 'hidden',
        border: `1px solid ${grey[400]}`,
      }}
    >
      <Grid direction="column">
        <Grid
          item
          sx={{
            padding: 0.7,
            backgroundColor: grey[200],
            borderBottom: `1px solid ${grey[400]}`,
          }}
        >
          <Grid container justifyContent="space-between">
            <Grid item>
              <Stack direction="row" spacing={0.7} alignItems="center">
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 25,
                    height: 25,
                    bgcolor: deepOrange[500],
                    fontSize: 18,
                  }}
                >
                  {username[0].toUpperCase()}
                </Avatar>

                <Typography fontWeight={700}>{username}</Typography>

                <Box sx={{ marginLeft: '5px' }}>
                  <Stack direction="row" spacing={0.5}>
                    <Typography fontSize={13}>{date}</Typography>

                    <Typography fontSize={13}>{time}</Typography>
                  </Stack>
                </Box>
              </Stack>
            </Grid>

            <Grid item sx={{ marginLeft: 'auto' }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Link
                  component={RouterLink}
                  to="/tel"
                  color="primary"
                  fontSize={14}
                  fontWeight={900}
                  underline="hover"
                >
                  {telNumber}
                </Link>

                <ViewsCount count={viewsCount} />

                <CommentsCount count={commentsCount} />
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={{ padding: 1.5 }}>
          <Typography fontSize={14} sx={{ marginBottom: '8px' }}>
            {description}

            {category && (
              <Typography
                component="strong"
                fontSize={14}
                sx={{ color: grey[400], marginLeft: '4px' }}
              >
                {category}
              </Typography>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Comment;
