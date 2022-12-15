import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
        text: '',
        
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [500,200,300,100,400,600],
        borderColor: 'rgb(3, 201, 215)',
        backgroundColor: 'rgb(3, 201, 215)',
      },
    ],
  };

export const RevenueChart = () => {
    
  return (
    <div style={{padding: "30px", background:"white", marginTop:"30px", borderRadius:"10px"}}>

        <h1 style={{fontSize:"20px"}}>Revenue chart (Unit: VND)</h1>
        <Line options={options} data={data} />
    </div>
  )
}
