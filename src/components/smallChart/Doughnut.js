import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import './doughnut.css'

function DoughnutChart() {


const data = {
  // labels: ['Red', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        "#00888E",
        '#8CDA7C',
      ],
      cutout:"90%",

    },
  ],
  plugins: ["100 student"],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    }}}

const[dayDate,setDayDate] = useState("Feb 2021")


  return(
  <>
    <div >
    <div className="doughnut">
    <div className="attend">
    <div>
      <p className="attend-demo">{data.datasets[0].data[0]} Attended Demo</p>
    </div>
    <div>
      <p className="attend-enroll">{data.datasets[0].data[1]} Enrolled</p>
    </div>

    </div>
    <Doughnut data={data}  options={options}/>
    </div>
    </div>
    <div>
      <h1 className="dayDate">{dayDate}</h1>
    </div>
    <div className="dough-label">
          <div className="labell-demo">
          <div className="dough-demo-dot"> </div> 
            <h1 className="dough-demo-labels">Demo</h1>
            </div>
            <div className="labell-enroll">
            <div className="dough-enroll-dot"></div>
            <h1 className="dough-enroll-labels">Enrolled</h1>
            </div>
          </div>
  </>
)}

export default DoughnutChart