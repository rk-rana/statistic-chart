import React,{ useState } from "react";
import { Bar } from "react-chartjs-2";
import "./Profile-visit-bar.css";
import Date from "../date/dateRect"

function BarChart() {
  const data = {
    labels: ["S", "M", "T", "W", "F", "S"],
    datasets: [
      {
        data: [2,8,4,5,7,6],
        backgroundColor: "#258F87",
        borderColor: "#258F87",
        borderWidth: 1,
      },
    ]
  };


  const data2 = {
    labels: ["S", "M", "T", "W", "F", "S"],
    datasets: [
      {
        data: [1,5,4,3,9,7],
        backgroundColor: "#258F87",
        borderColor: "#258F87",
        borderWidth: 1,
      },
    ]
  };

  const data3 = {
    labels: ["S", "M", "T", "W", "F", "S"],
    datasets: [
      {
        data: [6, 9, 3, 5, 2, 3],
        backgroundColor: "#258F87",
        borderColor: "#258F87",
        borderWidth: 1,
      },
    ]
  };

  const data4 = {
    labels: ["S", "M", "T", "W", "F", "S"],
    datasets: [
      {
        data: [1,2,3,4,5,6],
        backgroundColor: "#258F87",
        borderColor: "#258F87",
        borderWidth: 1,
      },
    ]
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

const options ={
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  }
}



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
    <div className="profilebarchart">
      <div className="profilerect">
      <div className="dateBox">
      <h1 className="profile">Profile Visit</h1>
            <div className="profiledate">
              <Date handleUpdate={handleUpdate} />
            </div>
          </div>
          <div style={{display:"flex"}}>
       <div className="profileinfo">
      <h6>17.6%</h6>

      </div>
      <div className="profilebar">
        <Bar data={barData} options={options}  />
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
// options={options}
export default BarChart;