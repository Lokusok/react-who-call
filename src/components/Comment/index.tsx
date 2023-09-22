import React from 'react';

import { Typography, Box, Grid, Avatar, Link } from '@mui/material';
import { deepOrange, grey } from '@mui/material/colors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Comment: React.FC = () => {
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
              <Grid container spacing={0.7} alignItems="center">
                <Grid item>
                  <Avatar
                    variant="rounded"
                    sx={{
                      width: 25,
                      height: 25,
                      bgcolor: deepOrange[500],
                      fontSize: 18,
                    }}
                  >
                    М
                  </Avatar>
                </Grid>

                <Grid item>
                  <Typography fontWeight={700}>мак</Typography>
                </Grid>

                <Grid item sx={{ marginLeft: '5px' }}>
                  <Grid container spacing={0.5}>
                    <Grid item>
                      <Typography fontSize={13}>22.09.2023</Typography>
                    </Grid>

                    <Grid item>
                      <Typography fontSize={13}>21:54</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Link
                    href="/tel"
                    color="primary"
                    fontSize={14}
                    fontWeight={900}
                    underline="hover"
                  >
                    9120985226
                  </Link>
                </Grid>

                <Grid item>
                  <Grid container alignItems="center" spacing={0.3}>
                    <Grid
                      item
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <VisibilityIcon
                        sx={{ color: grey[700] }}
                        fontSize="small"
                      />
                    </Grid>

                    <Grid item>
                      <Typography sx={{ color: grey[700] }} fontSize={12}>
                        22
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container alignItems="center" spacing={0.3}>
                    <Grid
                      item
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <ChatBubbleIcon
                        sx={{ color: grey[700] }}
                        fontSize="small"
                      />
                    </Grid>

                    <Grid item>
                      <Typography sx={{ color: grey[700] }} fontSize={12}>
                        2
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={{ padding: 1.5 }}>
          <Typography fontSize={14} sx={{ marginBottom: '8px' }}>
            мошенники, женщина представляется следователем московской полиции
            <Typography
              component="strong"
              fontSize={14}
              sx={{ color: grey[400], marginLeft: '4px' }}
            >
              Мошенники
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Comment;
