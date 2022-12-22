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
import { useSelector } from 'react-redux';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


export const OrderChart = () => {
  const {totalOrderIn7Month} = useSelector(store => store.admin)
  console.log(totalOrderIn7Month)
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
  const getLabels = () => {
    return totalOrderIn7Month.map((month) => {
      return new Date(`${month.year}-${month.month}-01`).toLocaleString('default', { month: 'long' })
    })
  }

  const getData = () => {
    return totalOrderIn7Month.map((month) => {
      return month.count
    })
  }
  const labels = getLabels().reverse()
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: getData().reverse(),
        backgroundColor: 'rgb(254, 201, 15)',
      },
    ],
  };

  return (
    <div style={{padding: "30px", background:"white", marginTop:"30px", borderRadius:"10px"}}>

        <h1 style={{fontSize:"20px"}}>Revenue chart (Unit: VND)</h1>
        <Bar options={options} data={data} />;
    </div>
  )
}
