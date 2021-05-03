import React,{ useState } from "react";
import { Bar } from "react-chartjs-2";
import "./Age.css";

function BarChart() {
  // const [{ data1, data2, data3 }, dispatch] = useStateValue();
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        data: [12,8,46,25,58,45],
        backgroundColor: "#005C79",
        borderColor: "##005C79",
        borderWidth: 1,
      },
    ]
  };



const options ={
  responsive: true,
  maintainAspectRatio: false,
}



    const [barData, setBarData] = useState(data);

  return (
    <><div className="agebarchart">
    <div className="age">
      <h1 className="agetext">Active Hours</h1>
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


