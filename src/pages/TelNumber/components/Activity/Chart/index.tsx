import React from 'react';

import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';

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

import { chartData } from '../../../../../api/mock';

const Chart: React.FC = () => {
  return (
    <Box sx={{ maxWidth: '650px' }}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={chartData}
          margin={{ top: 0, right: 0, left: -30, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="reviewsCount"
            name={'Количество отзывов'}
            stroke={blue[800]}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Chart;
