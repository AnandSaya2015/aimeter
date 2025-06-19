import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartView = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'AI Layoffs',
        data: [2000, 1800, 2200, 2500, 1900],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'AI Job Openings',
        data: [1000, 1400, 1200, 1700, 1500],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="w-full mt-8">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartView;
