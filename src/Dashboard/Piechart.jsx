import React, { useEffect, useRef } from "react";
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Typography, useTheme } from "@mui/material";

// Register necessary Chart.js components
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    const data = {
      labels: ["Ameerpet", "Malkapur", "KPHB", "Kukatpally"],
      datasets: [
        {
          data: [20, 25, 15, 40],
          backgroundColor: [
            "#01576E",
            "#C56C2A",
            "#F8B916",
            "#10A3B5",
            "#873e23",
          ],
          borderWidth: 0,
          cutout: "45%",
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      devicePixelRatio: window.devicePixelRatio || 1,
      layout: {
        padding: {
          top: 30,
        },
      },
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: '#293731',
            font: {
              family: 'Outfit',
              size: 14,
              weight: '600',
            },
            usePointStyle: true,
            boxWidth: 8,
            boxHeight: 8,
            padding: 20,
          },
        },
        tooltip: {
          enabled: false, // Disable default tooltip
          external: (tooltipModel) => {
            const tooltipEl = document.getElementById('chartjs-tooltip');
            if (!tooltipEl) return;

            if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = 0;
              return;
            }

            if (tooltipModel.body) {
              const tooltipItems = tooltipModel.body.map((item) => {
                const label = item.lines[0];
                const value = data.datasets[0].data[tooltipModel.dataPoints[0].dataIndex];
                const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                const percentage = ((value / total) * 100).toFixed(2) + "%"; // Calculate percentage for hovered segment
                return `${label}: ${value} (${percentage})`; // Use the actual value of that segment
              });

              tooltipEl.innerHTML = tooltipItems.join('<br>');
            }

            const position = chartRef.current.getBoundingClientRect();
            tooltipEl.style.opacity = 1;
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.left = `${position.left + tooltipModel.caretX}px`;
            tooltipEl.style.top = `${position.top + tooltipModel.caretY}px`;
            tooltipEl.style.pointerEvents = 'none'; // Prevent mouse events
          },
        },
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      animation: {
        onComplete: function () {
          const chart = chartInstance.current;
          const ctx = chart.ctx;
          const dataset = chart.data.datasets[0];
      
          // Determine the index of the hovered segment
          const hoveredSegmentIndex = chart.tooltip._active && chart.tooltip._active[0]
            ? chart.tooltip._active[0].index
            : -1;
      
          dataset.data.forEach((data, index) => {
            const arc = chart.getDatasetMeta(0).data[index];
      
            // Only apply shadow to the hovered segment
            if (hoveredSegmentIndex === index) {
              ctx.save();
              ctx.strokeStyle = dataset.backgroundColor[index];
              ctx.globalAlpha = 0.5;
              ctx.lineWidth = 20;
      
              // Draw the outer arc for the hovered segment
              ctx.beginPath();
              ctx.arc(arc.x, arc.y, arc.outerRadius + 10, arc.startAngle, arc.endAngle);
              ctx.stroke();
      
              // Draw the value closer to the center of the doughnut
              const value = dataset.data[index];
              const angle = (arc.startAngle + arc.endAngle) / 2; // Calculate the angle of the segment
              
              // Adjust the position to be inside the doughnut, near the center
              const innerX = arc.x + Math.cos(angle) * (arc.innerRadius + (arc.outerRadius - arc.innerRadius) / 2);
              const innerY = arc.y + Math.sin(angle) * (arc.innerRadius + (arc.outerRadius - arc.innerRadius) / 2);
              
              ctx.fillStyle = 'black'; // Change text color to black
              ctx.font = 'bold 12px Outfit'; // Set the font style
              ctx.textAlign = 'center'; // Center the text horizontally
              ctx.textBaseline = 'middle'; // Center the text vertically
              ctx.fillText(value, innerX, innerY); // Draw the value at the calculated position
      
              ctx.restore();
            } else {
              ctx.globalAlpha = 1.0;
            }
          });
        },
      },
      
    };

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    chartInstance.current = new Chart(chartRef.current, {
      type: "doughnut",
      data,
      options,
    });

    return () => {
      // Cleanup: destroy chart instance on component unmount
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [theme]);

  return (
    <React.Fragment>
      <Typography fontSize='20px' color="#293731" fontWeight='400' fontFamily='Outfit'>Top Viewed Properties</Typography>
      <Box
        sx={{
          height: "310px",
          display: "flex",
        }}
      >
        <canvas ref={chartRef} style={{ width: '100%' }}></canvas>
      </Box>
    </React.Fragment>
  );
};

export default PieChart;
