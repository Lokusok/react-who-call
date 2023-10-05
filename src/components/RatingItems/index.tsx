import React from 'react';

import { Box, Grid, Typography, Skeleton } from '@mui/material';
import { grey } from '@mui/material/colors';

import { IPreviewOfTel } from '../../types';

import TelNumberLine from '../TelNumberLine';

interface RatingItemsProps {
  title: string;
  items: IPreviewOfTel[] | [] | null;
}

const RatingItems: React.FC<RatingItemsProps> = ({ title, items }) => {
  return (
    <Box>
      <Grid container direction="column" spacing={1.5}>
        {items ? (
          <>
            <Grid item>
              <Typography>{title}:</Typography>
            </Grid>

            <Grid item>
              <Grid
                component="ul"
                container
                direction="column"
                sx={{
                  padding: 0,
                  margin: 0,
                  listStyle: 'none',
                  '& .MuiBox-root': {
                    borderTop: 'none',
                  },
                  '& .MuiGrid-root:first-child > .MuiBox-root': {
                    borderRadius: '5px 5px 0 0',
                    borderTop: `1px solid ${grey[400]}`,
                  },
                  '& .MuiGrid-root:last-child > .MuiBox-root': {
                    borderRadius: '0 0 5px 5px',
                  },
                }}
              >
                {items.map((number) => (
                  <Grid component="li" item key={number.id}>
                    <TelNumberLine
                      telNumber={number.telNumber}
                      viewsCount={number.viewsCount}
                      commentsCount={number.commentsCount}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid item>
              <Skeleton width="100%" height={65} />
            </Grid>

            <Grid item>
              <Skeleton height={200} sx={{ transform: 'none' }} />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default RatingItems;
