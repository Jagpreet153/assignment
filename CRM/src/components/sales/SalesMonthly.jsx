import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import salesData from '../../assets/total.json'; // Assume this is your JSON file

// Register required modules
ChartJS.register(ArcElement, Tooltip, Legend);

// Function to organize and aggregate data by month
const organizeDataByMonth = (data) => {
  const organizedData = {};
  
  data.total_sales.forEach((sale) => {
    const date = new Date(sale.date);
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const monthKey = `${month} ${year}`;

    if (!organizedData[monthKey]) {
      organizedData[monthKey] = 0;
    }
    organizedData[monthKey] += sale.revenue;
  });

  return organizedData;
};

const SalesMonthly = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const monthlyData = organizeDataByMonth(salesData);

    const labels = Object.keys(monthlyData);
    const revenues = Object.values(monthlyData);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Monthly Revenue',
          data: revenues,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2,
        },
      ],
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Monthly Revenue Pie Chart</h2>
        {chartData && chartData.datasets ? (
          <Pie data={chartData} />
        ) : (
          <p className="text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SalesMonthly;
