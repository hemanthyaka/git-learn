import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
  { day: 1, value: 10 },
  { day: 2, value: 20 },
  { day: 3, value: 30 },
  { day: 4, value: 50 },
  { day: 5, value: 40 },
  { day: 6, value: 60 },
  { day: 7, value: 50 },
  { day: 8, value: 70 },
  { day: 9, value: 65 },
  { day: 10, value: 80 },
  { day: 11, value: 70 },
  { day: 12, value: 90 },
  { day: 13, value: 75 },
  { day: 14, value: 85 },
  { day: 15, value: 65 },
  { day: 16, value: 78 },
  { day: 17, value: 88 },
  { day: 18, value: 60 },
  { day: 19, value: 70 },
  { day: 20, value: 90 },
  { day: 21, value: 80 },
  { day: 22, value: 100 },
  { day: 23, value: 70 },
  { day: 24, value: 60 },
  { day: 25, value: 90 },
  { day: 26, value: 80 },
  { day: 27, value: 50 },
  { day: 28, value: 40 },
  { day: 29, value: 30 },
  { day: 30, value: 20 },
  { day: 31, value: 10 },
];

export default function SummaryAreaChart() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1000, // Max width for responsiveness
        padding: '16px'
      }}
    >
      {/* Title */}
      <Typography variant="h6" fontSize='20px' color="#293731" fontWeight='400' fontFamily='Outfit' paddingBottom='15px' align="left" gutterBottom>
        Client Summary
      </Typography>

      {/* Responsive Area Chart */}
      <ResponsiveContainer width="100%" height={300} style={{ paddingBottom: '8px' }}>
        <AreaChart
          data={data}
          margin={{
            top: 10, right: 0, left: -35, bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          
          {/* Customized XAxis */}
          <XAxis 
            dataKey="day" 
            ticks={[1, 5, 10, 15, 20, 25, 30]} // Set specific ticks
            axisLine={false} // Remove X-axis line
            tickLine={false} // Remove X-axis tick lines
            style={{ fontSize: '12px' }}
          />
          
          {/* YAxis with percentage formatting */}
          <YAxis
            tickFormatter={(tick) => `${tick}%`} // Display Y-axis as percentages
            label={{ angle: -90 }}
            axisLine={false} // Remove Y-axis line
            tickLine={false} // Remove Y-axis tick lines
            style={{ fontSize: '12px' }}
          />

          {/* Disable Tooltip */}
          <Tooltip content={null} />
          
          {/* Area chart */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorValue)"
            activeDot={false} // Disable active dot on hover
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}
