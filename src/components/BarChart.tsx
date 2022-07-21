import React from 'react';
import { formatDate } from '../utils/formatDate';
import { SismosInformation } from '../utils/types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props: SismosInformation) => {
  const labels = props.data?.map((item) => formatDate(item.Fecha));
  const data = props.data?.map((item) => parseInt(item.Profundidad)) || [];
  const appData: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: 'Profundidad',
        data,
        backgroundColor: '#ff5733',
      },
    ],
  };
  const chartOptions: ChartOptions<'bar'> = {
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
  return <Bar data={appData} options={chartOptions} />;
};

export default BarChart;
