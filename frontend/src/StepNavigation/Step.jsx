import React, { useState } from "react";
import "./index.css";

const Step = (props) => {
  return (
    <div className="stepWrapper">
      <div className={"stepBlock" + (props.selected ? " selected" : "")}>
        <div
          className={"circleWrapper"}
          onClick={() => props.updateStep(props.index)}
        >
          <div className="circle">{props.index + 1}</div>
        </div>
        <span>{props.label}</span>
      </div>
    </div>
  );
};

export default Step;
