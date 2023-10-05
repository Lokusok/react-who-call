import React from 'react';

import { Box, Typography } from '@mui/material';

interface DescriptionProps {
  telNumber: string;
  internationalFormat: string;
}

const Description: React.FC<DescriptionProps> = ({
  telNumber,
  internationalFormat,
}) => {
  return (
    <Box fontSize={15} sx={{ marginBottom: '1rem' }}>
      <Typography component="strong" fontSize={15} fontWeight={700}>
        Кто звонил по номеру +7{telNumber}
      </Typography>{' '}
      или 8{telNumber}? Узнайте информацию по звонкам с номера телефона&nbsp;
      <Typography component="strong" fontSize={15} fontWeight={700}>
        {internationalFormat}
      </Typography>
      .
      <Typography fontSize={15} sx={{ marginBottom: '1rem' }}>
        Мы собрали самую полную информацию по номеру {internationalFormat}:
        отзывы, оператор, какой регион, варианты набора, местоположение
        абонента.
      </Typography>
    </Box>
  );
};

export default Description;
