import React from "react";
import DoughtNut from "../smallChart/Doughnut";
import Line from "../smallChart/Line";
import "./doughtnutLine.css"
import Date from "../smallChart/dateRect";

function doughtLineChart() {
  return (
      <div className="rect-8" >
        <div className="dln">
        <div className="dateBox">
        <h1 className="demo">Demo Conversion</h1>
        <div className="date-doughnut">
        <Date/>
        </div>
        </div>
        <div className="rect-7" style={{display:"flex"}}>
          <div>
            <DoughtNut />
          </div>
          <div className="rect-between"></div>
          <div>
            <Line />
          </div>
          </div>
        </div>
        </div>
  );
}

export default doughtLineChart;
