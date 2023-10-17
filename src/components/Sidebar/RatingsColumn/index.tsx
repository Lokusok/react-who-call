import React from 'react';

import { Grid, Alert, Typography } from '@mui/material';

import RatingItems from '../../RatingItems';

import { IPreviewOfTel } from '../../../types';

interface RatingsColumnProps {
  lastVerifiedTels: IPreviewOfTel[] | [] | null;
  mostViewedTels: IPreviewOfTel[] | [] | null;
  mostCommented: IPreviewOfTel[] | [] | null;
}

const RatingsColumn: React.FC<RatingsColumnProps> = ({
  lastVerifiedTels,
  mostViewedTels,
  mostCommented,
}) => {
  if (
    [lastVerifiedTels, mostViewedTels, mostCommented].every(
      (obj) => obj && obj.length === 0
    )
  ) {
    return (
      <Alert severity="info">
        <Typography fontSize={15}>Пока что тут пусто :)</Typography>
      </Alert>
    );
  }

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <RatingItems
          title="Последние проверенные телефоны"
          items={lastVerifiedTels}
        />
      </Grid>

      <Grid item>
        <RatingItems title="Самые комментируемые" items={mostCommented} />
      </Grid>

      <Grid item>
        <RatingItems title="Самые просматриваемые" items={mostViewedTels} />
      </Grid>
    </Grid>
  );
};

export default RatingsColumn;
