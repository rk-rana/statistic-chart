import React, { useState } from "react";
import "./date.css";
import Divider from '@material-ui/core/Divider';
function DateRect(props) {

const [days,setDays] = useState("D");
const [day,setDay] = useState("D");







const handleClick = (x) => {
  props.handleUpdate(x);
  setDays(x)
  setDay(x)
}

  return (
    <div className="mainDate">
      <div className="dayBox">
      <div className={ days == "D" ? "active days_box": "days_box" }  onClick={ () => {handleClick("D")}}   >
        <h1 className={ day == "D" ? "actives day": "day" }>D</h1>
        </div>
        <Divider orientation="vertical" flexItem />

        <div className={ days == "W" ? "active days_box": "days_box"}  onClick={() =>{handleClick("W")}}>
        <h1 className={ day == "W" ? "actives day": "day" }>W</h1>
        </div>
        <Divider orientation="vertical" flexItem />

        <div className={ days == "M" ? "active days_box": "days_box"}  onClick={() =>{handleClick("M")}}>
        <h1 className={ day == "M" ? "actives day": "day" }>M</h1>
        </div>
        <Divider orientation="vertical" flexItem />


        <div className={ days == "Y" ? "active days_box": "days_box"}  onClick={() =>{handleClick("Y")}}>
        <h1 className={ day == "Y" ? "actives day": "day" }>Y</h1>
        </div>
      </div>
    </div>
  );
}

export default DateRect;


