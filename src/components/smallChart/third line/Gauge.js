import React from 'react';
import { Gauge } from 'react-chartjs-2'
import Date from "../date/dateRect"
import "./Gauge.css"

function GaugeChart(){

    // const data = {
    //     datasets: [{
    //       value: 0.5,
    //       data: [1, 2, 3, 4],
    //       backgroundColor: ['green', 'yellow', 'orange', 'red'],
    //     }]
    // }
    //   const options = {
    //     needle: {
    //       radiusPercentage: 2,
    //       widthPercentage: 3.2,
    //       lengthPercentage: 80,
    //       color: "rgba(0, 0, 0, 1)"
    //     }
    // }
    //     const valueLabel = {
    //       display: true,
    //       formatter: (value) => {
    //         return '$' + Math.round(value);
    //       },
    //       color: 'rgba(255, 255, 255, 1)',
    //       backgroundColor: 'rgba(0, 0, 0, 1)',
    //       borderRadius: 5,
    //       padding: {
    //         top: 10,
    //         bottom: 10
    //       }
    //     }
      
    
    return(
        <>
        <div className="gaugeuserchart">
        <div className="gaugerect">
        <div className="gauge-date">
            <h1 className="user-retention">User Retenation</h1>
            <div className="gDate">
                <Date/>
            </div>
        </div>
            {/* <Gauge data={data}  options={options} valueLabel={valueLabel}/><h1>snflnf</h1> */}
        </div>
        </div>
        </>
    );
}
export default GaugeChart;