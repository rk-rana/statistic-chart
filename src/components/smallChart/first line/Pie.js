import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "./pie.css";
import Date from "../date/dateRect";
// import Grid from '@material-ui/core/Grid';

// chart1.canvas.parentNode.style.height = '128px';
// chart1.canvas.parentNode.style.width = '128px';

function Chart1() {

  //dummy data for testing purposes
  const data1 = {
    // labels:["Current","Past"],
    datasets: [
      {
        label: "My First Dataset",
        data: [30, 70],
        backgroundColor: ["#005C79", "#0C324F"],
        hoverOffset: 4,
      },
    ],
  };

  const data2 = {
    // labels:["Current","Past"],
    datasets: [
      {
        label: "My First Dataset",
        data: [85, 15],
        backgroundColor: ["#005C79", "#0C324F"],
        hoverOffset: 4,
      },
    ],
  };

  const data3 = {
    // labels:["Current","Past"],
    datasets: [
      {
        label: "My First Dataset",
        data: [60, 70],
        backgroundColor: ["#005C79", "#0C324F"],
        hoverOffset: 4,
      },
    ],
  };

  const data4 = {
    // labels:["Current","Past"],
    datasets: [
      {
        label: "My First Dataset",
        data: [50, 50],
        backgroundColor: ["#005C79", "#0C324F"],
        hoverOffset: 4,
      },
    ],
  };

  const [pieData, setPieData] = useState(data1);
  // const [pieStyle,setPieStyle] = useState()



  const handleUpdate = (e) => {
    if (e == "D") {
      setPieData(data1);
    }

    if (e == "W") {
      setPieData(data2);
    }

    if (e === "M") {
      setPieData(data3);
    }

    if (e == "Y") {
      setPieData(data4);
    }
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      arc: {
          borderWidth: 0
      }
  },
    plugins: {
      legend: {
        position: "top",
      },
    },
    total: pieData.datasets[0].data.reduce((x,y)=>x+y) 
  };

  // const handleClick = (x) =>{
  //   setPieStyle(x)
  // }
  return (
    <>
      <div className="pie">
        <div className="rectangle-8">
          <div className="dateBox">
            <h1 className="number-of-students">Number of Students</h1>
            <div className="date">
              <Date handleUpdate={handleUpdate} />
            </div>
          </div>
          <div className="pieChart">
            <div>
              <p className="currentStudent">{pieData.datasets[0].data[0]} Current</p>
              
            </div>
            <div className="pieStyle">
              <Pie data={pieData} options={options} />
            </div>

            <div>
              <p className="pastStudent">{pieData.datasets[0].data[1]} Past</p>
            </div>
          </div>

          <div className="totalS">
            <h1 className="total">{options.total} Total Student </h1>
          </div>
          <div className="label">
          <div className="labell">
            <h1 className="labels">Current</h1>
            </div>
            <div className="labell">
            <h1 className="labels">Past</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart1;
