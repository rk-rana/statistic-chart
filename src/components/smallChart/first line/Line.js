import React from 'react'
import { Line } from 'react-chartjs-2'
import "./line.css";

const data = {
  labels: ['1-6','7-13','14-20','21-28'],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81]
    }
  ]
}

const options = {
  responsive: true,
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