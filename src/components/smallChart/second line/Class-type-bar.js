import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "./Class-type-bar.css";
import Date from "../date/dateRect";

function BarChart() {
  // const [{ data1, data2, data3 }, dispatch] = useStateValue();
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        data: [12, 8, 46, 25, 58, 45],
        backgroundColor: "#0C324F",
        borderColor: "#0C324F",
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        data: [12, 85, 45, 85, 85, 78],
        backgroundColor: "#0C324F",
        borderColor: "#0C324F",
        borderWidth: 1,
      },
    ],
  };

  const data3 = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#0C324F",
        borderColor: "#0C324F",
        borderWidth: 1,
      },
    ],
  };

  const data4 = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        data: [1, 2, 3, 4, 5, 6],
        backgroundColor: "#0C324F",
        borderColor: "#0C324F",
        borderWidth: 1,
      },
      {
        label: 'Traffic tickets',
        data: [1, 3,6,5,2,8,7],
        backgroundColor: '#005C79'
     }
    ],
    
 
  };
  // const options = {
  //   title: {
  //     display: true,
  //     text: "Bar Chart Demo",
  //     fontSize: 20,
  //   },
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        gridLines:{
          display:false,
          drawBorder: true
        },
        barPercentage : 0.4,
         stacked: true // this should be set to make the bars stacked
      }],
      yAxes: [{
        gridLines:{
          display:false
        },
        ticks: {
          display: false
      },
         stacked: true // this also..
      }]
   }
  };

  const [barData, setBarData] = useState(data3);
  const handleUpdate = (e) => {
    if (e == "D") {
      setBarData(data);
    }

    if (e == "W") {
      setBarData(data2);
    }

    if (e === "M") {
      setBarData(data3);
    }

    if (e == "Y") {
      setBarData(data4);
    }
  };

  return (
    <>
      <div className="classbarchart">
        <div className="classrect">
          <div className="dateBox">
            <h1 className="classtype">Class Type</h1>
            <div className="classdate">
              <Date handleUpdate={handleUpdate} />
            </div>
          </div>

          <div className="classbar">
            <Bar data={barData} options={options} />
          </div>
          <div className="group-private-class">
            <div className="group-dot-class">
              <div className="group">
                <div className="group-dot">{<span>&nbsp;&nbsp;</span>} </div>
                <h1 className="group-class">Group Class</h1>
              </div>
            </div>

            <div className="private-dot-class">
              <div className="private">
                <div className="private-dot">{<span>&nbsp;&nbsp;</span>}</div>
                <h1 className="private-class">
                  Private{<span>&nbsp;&nbsp;</span>}class
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// options={options}
export default BarChart;
