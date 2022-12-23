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
import { useSelector } from 'react-redux';

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
  


export const RevenueChart = () => {
  const {monthList,totalRevenueByMonth} = useSelector(store => store.admin)
  const labels = monthList.map((month) => {
    const newMonth = new Date(month)
    const monthRevenue = totalRevenueByMonth[totalRevenueByMonth.findIndex((month) => month.month === newMonth.getMonth() + 1)]?.revenue
    return newMonth.toLocaleString('default', { month: 'long' })
  });

  const myData = monthList.map((month) => {
    const newMonth = new Date(month)
    const monthRevenue = totalRevenueByMonth[totalRevenueByMonth.findIndex((month) => month.month === newMonth.getMonth() + 1)]?.revenue
    return monthRevenue
  });
  

  const data = {
    labels: labels.reverse(),
    datasets: [
      {
        label: 'Dataset 1',
        data: myData.reverse(),
        borderColor: 'rgb(3, 201, 215)',
        backgroundColor: 'rgb(3, 201, 215)',
      },
    ],
  };
  return (
    <div style={{padding: "30px", background:"white", marginTop:"30px", borderRadius:"10px"}}>

        <h1 style={{fontSize:"20px"}}>Revenue chart (Unit: VND)</h1>
        <Line options={options} data={data} />
    </div>
  )
}
