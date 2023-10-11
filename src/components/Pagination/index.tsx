import React from 'react';

import { Pagination as MuiPagination, useMediaQuery } from '@mui/material';

interface PaginationProps {
  onChange: (_: any, value: number) => void;
  count: number;
  defaultPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  onChange,
  count,
  defaultPage,
}) => {
  const isNeedHideBoundaries = useMediaQuery('(max-width: 390px)');

  return (
    <MuiPagination
      boundaryCount={isNeedHideBoundaries ? 0 : 1}
      count={count}
      defaultPage={defaultPage}
      variant="outlined"
      shape="rounded"
      onChange={onChange}
    />
  );
};

export default Pagination;
