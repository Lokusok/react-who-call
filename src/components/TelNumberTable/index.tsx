import React from 'react';

import { Table, TableRow, TableCell, Typography, Chip } from '@mui/material';

interface TelNumberTableProps {
  rating: number;
  viewsCount: number;
}

const TelNumberTable: React.FC<TelNumberTableProps> = ({
  rating,
  viewsCount,
}) => {
  return (
    <Table sx={{ width: 'initial' }}>
      <TableRow>
        <TableCell sx={{ paddingLeft: '0', paddingRight: '3rem' }}>
          <Typography fontSize={15} fontWeight={700}>
            Рейтинг номера:
          </Typography>
        </TableCell>
        <TableCell>
          <Chip label={`${rating}/5`} size="small" />
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell sx={{ paddingLeft: '0', paddingRight: '3.5rem' }}>
          <Typography fontSize={15} fontWeight={700}>
            Просмотров:
          </Typography>
        </TableCell>
        <TableCell>
          <Chip label={viewsCount} color="primary" size="small" />
        </TableCell>
      </TableRow>
    </Table>
  );
};

export default TelNumberTable;
