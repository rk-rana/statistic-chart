import React from "react";
import "./Index.css";
import Pie from "../smallChart/first line/Pie";
import Bar1 from "../smallChart/first line/Bar";
import Gauge from "../smallChart/third line/Gauge"
import UserGrowthBar from "../smallChart/second line/User-growth-line";
import ProfileVisitBar from "../smallChart/second line/Profile-visit-bar";
import RatingBar from "../smallChart/second line/Rating-bar"
import ClassTypeBar from "../smallChart/second line/Class-type-bar"
// import Grid from "@material-ui/core/Grid";
import DoughtLine from "../smallChart/first line/doughtLineChart"
import Demographic from "../smallChart/third line/Demographic"



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
          <Bar1 />
        </div>
        <div className="secondline">
          <UserGrowthBar/>
          <div className="rating-profile">
          <RatingBar/>
          <ProfileVisitBar/>
          </div>
          <ClassTypeBar/>
        </div>
        <div className="thirdline">
      <Gauge/>
      <Demographic/>
      </div>
      </div>
    </>
  );
};

export default index;
