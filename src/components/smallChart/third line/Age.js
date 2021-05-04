import React,{ useState } from "react";
import { Bar } from "react-chartjs-2";
import "./Age.css";

function BarChart() {
  // const [{ data1, data2, data3 }, dispatch] = useStateValue();
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        data: [12,8,46,25,58,45],
        backgroundColor: "#005C79",
        borderColor: "##005C79",
        borderWidth: 1,
      },
    ],
    gridLines: {
      display: false
   }
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
       barPercentage: 0.6
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

  return (
    <><div className="agebarchart">
    <div className="age">
      <h1 className="agetext">Age</h1>
          </div>
      
      <div className="agebar">
        <Bar data={barData} options={options}  />
        </div>
        </div>
    </>
  );
}
// options={options}
export default BarChart;


