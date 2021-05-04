import React,{ useState } from "react";
import { Bar } from "react-chartjs-2";
import "./Rating-bar.css";
import Date from "../date/dateRect"

function BarChart() {
  // const [{ data1, data2, data3 }, dispatch] = useStateValue();
  const data = {
    labels: ["S", "M", "T", "W", "F", "S"],
    datasets: [
      {
        data: [2,8,4,5,7,6],
        backgroundColor: "#F3CA3E",
        borderColor: "#F3CA3E",
        borderWidth: 1,
      },
    ]
  };


  const data2 = {
    labels: ["S", "M", "T", "W", "F", "S"],
    datasets: [
      {
        data: [1,5,4,3,9,7],
        backgroundColor: "#F3CA3E",
        borderColor: "#F3CA3E",
        borderWidth: 1,
      },
    ]
  };

  const data3 = {
    labels: ["S", "M", "T", "W", "F", "S"],
    datasets: [
      {
        data: [6, 9, 3, 5, 2, 3],
        backgroundColor: "#F3CA3E",
        borderColor: "#F3CA3E",
        borderWidth: 1,
      },
    ]
  };

  const data4 = {
    labels: ["S", "M", "T", "W", "F", "S"],
    datasets: [
      {
        data: [1,2,3,4,5,6],
        backgroundColor: "#F3CA3E",
        borderColor: "#F3CA3E",
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
  },
  scales: {
    xAxes: [{
       gridLines: {
          display: false
       },
       barPercentage : 0.5
    }],
    yAxes: [{
       gridLines: {
          display: false
       },
       ticks: {
        display: false
    }
    }]
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
    <div className="ratingbarchart">
      <div className="ratingrect">
      <div className="dateBox">
      <h1 className="rating">Rating</h1>
            <div className="ratingdate">
              <Date handleUpdate={handleUpdate} />
            </div>
          </div>
          <div style={{display:"flex"}}>
      <div className="ratinginfo">
      <h6>17.6%</h6>

      </div>
      <div className="ratingbar">
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