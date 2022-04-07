import React, { useState } from "react";
import Step from "./Step";
import "./index.css";

const StepNavigation = (props) => {
  return (
    <div className="stepWrapper">
      {props.labelArray.map((item, index) => (
        <Step
          key={index}
          index={index}
          label={item}
          updateStep={props.updateStep}
          selected={props.currentStep === index++}
        />
      ))}
    </div>
  );
};

export default StepNavigation;
