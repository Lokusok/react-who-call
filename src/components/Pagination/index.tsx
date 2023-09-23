import React from 'react';

import { Pagination as MuiPagination, useMediaQuery } from '@mui/material';

const Pagination = () => {
  const isNeedHideBoundaries = useMediaQuery('(max-width: 390px)');

  return (
    <MuiPagination
      boundaryCount={isNeedHideBoundaries ? 0 : 1}
      count={10}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default Pagination;
