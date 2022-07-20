import React from 'react';
import { formatDate } from '../utils/formatDate';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => formatDate(item.Fecha)),
    datasets: [
      {
        label: 'Profundidad',
        data: data.map((item) => item.Profundidad),
        backgroundColor: '#ff5733',
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Profundidad en sismos recientes',
      },
    },
  };
  return <Bar data={chartData} options={chartOptions} />;
};

export default BarChart;
