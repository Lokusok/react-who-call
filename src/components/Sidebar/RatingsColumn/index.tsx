import React from 'react';

import { Grid } from '@mui/material';

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
