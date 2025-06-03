import React from "react";
import Robot2 from "../assets/AgenticAIrobotSide.svg";
import "./RobotSide.css";
const RobotSide = ({text}) => {
  return (
    <div className="robot">
      <p className="robot-text-1">
        {text}
      </p>
      <img src={Robot2} alt="Robot" className="robot-svg-1" />
    </div>
  );
};

export default RobotSide;
