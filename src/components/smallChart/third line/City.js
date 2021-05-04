import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "./City.css";
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
        data: [30,70,56,45,30],
        backgroundColor: ["#0B223B", "#6B79BB","#F99E2A","#298F87","#F15D4F"],
        hoverOffset: 4,
      },
    ],
  };

  const [pieData, setPieData] = useState(data1);
  // const [pieStyle,setPieStyle] = useState()

  // const handleUpdate = (e) => {
  //   if (e == "D") {
  //     setPieData(data1);
  //   }

  //   if (e == "W") {
  //     setPieData(data2);
  //   }

  //   if (e === "M") {
  //     setPieData(data3);
  //   }

  //   if (e == "Y") {
  //     setPieData(data4);
  //   }
  // };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    elements: {
      arc: {
          borderWidth: 0
      }
  }
    // total: pieData.datasets[0].data.reduce((x,y)=>x+y)
  };

  // const handleClick = (x) =>{
  //   setPieStyle(x)
  // }
  return (
    <>
      <div className="citypiechart">
        <div className="city">
          <h1 className="citytext">City</h1>
        </div>
        <div className="citypie">
          <Pie data={pieData} options={options} />
        </div>
      </div>
    </>
  );
}

export default Chart1;
