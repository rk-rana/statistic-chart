import React from 'react'
import { Line } from 'react-chartjs-2'
import "./line.css";


const DemoData = {
    data: [20, 15, 60, 60, 65, 30, 70],
    lineTension: 0,
    fill: false,
  borderColor: '#00888E'
}
const EnrollData =    {
  data: [0, 59, 75, 20, 20, 55, 40],
  lineTension: 0,
  fill: false,
  borderColor: '#8CDA7C'
}

const data = {
  labels: ['1-6','7-13','14-20','21-28'],
  datasets: [DemoData,EnrollData]
}

const options = {
  responsive: true,
  scales: {
    xAxes: [{
       gridLines: {
          display: false
       }
    }],
    yAxes: [{
       gridLines: {
          display: false
       },
       ticks: {
        display: false
    }
    }]
},
legend: {
  display: false
}
}

const LineChart = () => (
  <><div className="linechart">
  <div className="progress">
    <h1 className="progress-text">Progress</h1>
  </div>
    <div className='rectangle-3'>
    <Line data={data} options={options} />
    </div>
    </div>
  </>
)

export default LineChart;