/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { Box } from '@mui/material';

// Register all necessary components
Chart.register(...registerables);

const TinyBarChart = ({ selectedMonthIndex, lastSixMonths }) => { // Destructure props
  const chartRef = React.useRef(null); // Reference for the chart

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: lastSixMonths.map(month => {
          const date = new Date(2024, month); // Use a constant year
          return date.toLocaleString('default', { month: 'long' }); // Get month name
        }),
        datasets: [
          {
            label: 'Clients',
            data: [180, 100, 300, 180, 150, 60], // Example data for the last six months
            backgroundColor: (context) => {
              const index = context.dataIndex;
              // Highlight the selected month bar
              return lastSixMonths[selectedMonthIndex] === lastSixMonths[index] ? '#10A3B5' : '#E1E4E5';
            },
            borderRadius: 4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            display: false, // Hide x-axis
          },
          y: {
            display: false, // Hide y-axis
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false, // Hide legend
          },
          tooltip: {
            enabled: false, // Disable tooltips
          },
        },
      },
    });

    return () => {
      chartInstance.destroy(); // Cleanup chart instance on unmount
    };
  }, [selectedMonthIndex, lastSixMonths]); // Depend on selectedMonthIndex and lastSixMonths

  return (
    <Box sx={{width:'110px', height:'65px',position:'relative', top:'-60px',left:'-40px'}} >
      <canvas ref={chartRef} height={100} />
    </Box>
  );
};

export default TinyBarChart;
