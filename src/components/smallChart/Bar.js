import React,{ useState } from "react";
import { Bar } from "react-chartjs-2";
import "./chart.css";
import Date from "./dateRect"

function BarChart() {
  // const [{ data1, data2, data3 }, dispatch] = useStateValue();
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        label: "# of Red Votes",
        data: [12,,8,46,25,58,45],
        backgroundColor: "rgb(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132,1)",
        borderWidth: 1,
      },
    ],
    options: {
      maintainAspectRatio: false,
    }
  };


  const data2 = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        label: "# of Red Votes",
        data: [12, ,85,45,85,85,78],
        backgroundColor: "rgb(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132,1)",
        borderWidth: 1,
      },
    ],
    options: {
      maintainAspectRatio: false,
    }
  };

  const data3 = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        label: "# of Red Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgb(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132,1)",
        borderWidth: 1,
      },
    ],
    options: {
      maintainAspectRatio: false,
    }
  };

  const data4 = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        label: "# of Red Votes",
        data: [1,2,3,4,5,6],
        backgroundColor: "rgb(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132,1)",
        borderWidth: 1,
      },
    ],
    options: {
      maintainAspectRatio: false,
    }
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
      <div className="rectangle-6">
      <div className="dateBox">
      <h1 className="activehour">Active Hours</h1>
            <div className="date">
              <Date handleUpdate={handleUpdate} />
            </div>
          </div>
      
      <div className="bar">
        <Bar data={barData}  />
        </div>
      </div>
    </>
  );
}
// options={options}
export default BarChart;


