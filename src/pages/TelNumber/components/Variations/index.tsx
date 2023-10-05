import React from 'react';

import { Box } from '@mui/material';

import InfoBlock from '../InfoBlock';

interface VariationsProps {
  telNumber: string;
  internationalFormat: string;
  nationalFormat: string;
}

const Variations: React.FC<VariationsProps> = ({
  telNumber,
  internationalFormat,
  nationalFormat,
}) => {
  return (
    <Box sx={{ marginBottom: '1rem' }}>
      <InfoBlock title={`Варианты написания номера ${internationalFormat}`}>
        Возможные форматы написания этого номера: +7{telNumber}, 8{telNumber},{' '}
        {internationalFormat}, {nationalFormat}, {telNumber}
      </InfoBlock>
    </Box>
  );
};

export default Variations;
