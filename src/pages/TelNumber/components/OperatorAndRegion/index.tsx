import React from 'react';

import { Box } from '@mui/material';
import InfoBlock from '../InfoBlock';

interface OperatorAndRegionProps {
  telNumber: string;
  internationalFormat: string;
  operator: string;
  region: string;
}

const OperatorAndRegion: React.FC<OperatorAndRegionProps> = ({
  telNumber,
  internationalFormat,
  operator,
  region,
}) => {
  return (
    <Box sx={{ marginBottom: '1rem' }}>
      <InfoBlock title={`Оператор номера ${internationalFormat}`}>
        Номер +7{telNumber} принадлежит оператору {operator} в регионе&nbsp;
        {region}
      </InfoBlock>
    </Box>
  );
};

export default OperatorAndRegion;
