import React from "react";
import "./Index.css";
import Pie from "../smallChart/Pie.js";
import Bar from "../smallChart/Bar";
import Gauge from "../smallChart/Gauge"
// import Grid from "@material-ui/core/Grid";
import DoughtLine from "../smallChart/doughtLineChart"



const index = () => {
  return (
    <>
      <div className="listed-profile">
        <div className="rect-guitar">
          <h1 className="guitar">Guitar</h1>
        </div>
        <div style={{ display: "flex" }}>
          <Pie />
          <DoughtLine/>
          <Bar />
        </div>
      <Gauge/>
      </div>
    </>
  );
};

export default index;
