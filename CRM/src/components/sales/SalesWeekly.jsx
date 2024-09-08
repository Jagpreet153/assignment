import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import salesData from '../../assets/total.json'; // Adjust the path as necessary

// Register the necessary components for a bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Function to organize data by week
const organizeDataByWeek = (data) => {
  const organizedData = [];
  const weekMap = {};

  data.total_sales.forEach((sale) => {
    const date = new Date(sale.date);
    const year = date.getFullYear();

    // Calculate week number
    const week = getWeekNumber(date);

    // Unique week identifier
    const weekKey = `${year}-W${week}`;

    if (!weekMap[weekKey]) {
      weekMap[weekKey] = 0;
    }

    weekMap[weekKey] += sale.revenue;
  });

  for (let [key, value] of Object.entries(weekMap)) {
    organizedData.push({
      week: key,
      revenue: value,
    });
  }

  return organizedData;
};

// Helper function to get the week number
const getWeekNumber = (date) => {
  const startDate = new Date(date);
  startDate.setHours(0, 0, 0, 0);
  startDate.setDate(startDate.getDate() + 3 - ((startDate.getDay() + 6) % 7));
  const week1 = new Date(startDate.getFullYear(), 0, 4);
  return 1 + Math.round(((startDate.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
};

const SalesWeekly = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const weeklyData = organizeDataByWeek(salesData);

    const weeks = weeklyData.map(item => item.week);
    const revenues = weeklyData.map(item => item.revenue);

    setChartData({
      labels: weeks, // Weeks for x-axis
      datasets: [
        {
          label: 'Weekly Revenue',
          data: revenues, // Revenue for each week
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Revenue Bar Chart',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Weekly Revenue</h2>
        {chartData && chartData.datasets ? (
          <Bar data={chartData} options={options} />
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SalesWeekly;
