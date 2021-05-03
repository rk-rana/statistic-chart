import React from "react";
import Date from "../date/dateRect";
import "./Demographic.css";
import Age from "./Age";
import City from "./City";
import Gender from "./Gender";

function Demographic() {
  return (
    <>
    <div className="demobody">
      <div className="demorect">
        <div className="demographic-date">
          <h1 className="demographic">Demographic</h1>
          <div className="demo-graph-date">
            <Date></Date>
          </div>
        </div>
        <div className="Demomain">
          <Age />
          <City />
          <Gender />
        </div>
      </div>
      </div>
    </>
  );
}

export default Demographic;
