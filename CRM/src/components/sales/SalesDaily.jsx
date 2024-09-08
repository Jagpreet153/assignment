import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import salesData from '../../assets/total.json';

// Register the necessary components for a line chart
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const SalesDaily = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const labels = salesData.total_sales.map(item => item.date);
    const data = salesData.total_sales.map(item => item.revenue);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Daily Revenue',
          data,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          fill: true,
          tension: 0.4  // Smoother lines
        }
      ]
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Daily Revenue Line Chart'
      },
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Revenue ($)'
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Daily Revenue</h2>
        {chartData && chartData.datasets ? (
          <Line data={chartData} options={options} />
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SalesDaily;
