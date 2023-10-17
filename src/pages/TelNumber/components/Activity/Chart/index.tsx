import React from 'react';

import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';

import { TelActivity } from '../../../../../types';

interface ChartProps {
  activity: TelActivity;
}

const Chart: React.FC<ChartProps> = ({ activity }) => {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: '650px' }}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={activity}
          margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="count"
            name={'Количество отзывов'}
            stroke={theme.palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Chart;
