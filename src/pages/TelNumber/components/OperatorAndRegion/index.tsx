import React from 'react';

import { Box } from '@mui/material';
import InfoBlock from '../InfoBlock';

interface OperatorAndRegionProps {
  telNumber: string;
  internationalFormat: string;
  operator: string | null;
  region: string | null;
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
        Номер +7{telNumber} принадлежит оператору{' '}
        {operator || <u>не был определён</u>} в регионе&nbsp;
        {region || <u>не был определён</u>}
      </InfoBlock>
    </Box>
  );
};

export default OperatorAndRegion;
