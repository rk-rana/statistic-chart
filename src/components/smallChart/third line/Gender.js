import React,{ useState } from "react";
import { Bar } from "react-chartjs-2";
import "./Gender.css";


function BarChart() {
  // const [{ data1, data2, data3 }, dispatch] = useStateValue();
  const data = {
    labels: ["Male","Female","Unknown"],
    datasets: [
      {
        data: [12,8,15],
        backgroundColor: "#F35D4F",
        borderColor: "#F35D4F",
        borderWidth: 1,
      },
    ]
  };


 

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
       barPercentage: 0.2
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



    const [barData, setBarData] = useState(data);
  // const handleUpdate = (e) => {
  //   if (e == "D") {
  //     setBarData(data);
  //   }

  //   if (e == "W") {
  //     setBarData(data2);
  //   }

  //   if (e === "M") {
  //     setBarData(data3);
  //   }

  //   if (e == "Y") {
  //     setBarData(data4);
  //   }
  // };
  
  return (
    <>
    <div className="genderbarchart">
      <div className="city">
      <h1 className="gender">Gender</h1>
          </div>
      
      <div className="genderbar">
        <Bar data={barData} options={options}  />
        </div>
      </div>
    </>
  );
}
// options={options}
export default BarChart;


