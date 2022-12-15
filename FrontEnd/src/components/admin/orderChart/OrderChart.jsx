import React from 'react'
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
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [10,20,5,30,100,60],
        backgroundColor: 'rgb(254, 201, 15)',
      },
    ],
  };

export const OrderChart = () => {
  return (
    <div style={{padding: "30px", background:"white", marginTop:"30px", borderRadius:"10px"}}>

        <h1 style={{fontSize:"20px"}}>Revenue chart (Unit: VND)</h1>
        <Bar options={options} data={data} />;
    </div>
  )
}
