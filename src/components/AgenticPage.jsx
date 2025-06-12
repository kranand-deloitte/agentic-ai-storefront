import React from "react";
import "./AgenticPage.css";
import RobotSVG from "../assets/robot1.SVG";
import AgenticAIRobot from "../assets/AgenticAIRobot.svg"
import HeadlineSection from "./HeadlineSection";
import { useNavigate } from "react-router-dom";

const AgenticPage = () => {
  const navigate = useNavigate();
  const headlinesection = {
    title: "Agentic Ai Storefront",
    description:
      "In a world where creativity meets technology, innovative minds converge to craft smarter content that captivates audiences and drives engagement, transforming the digital landscape.",
  };
  return (
    <div className="agentic-page">
      <HeadlineSection
        title={headlinesection.title}
        description={headlinesection.description}
      />
      <div
        className="robot-container"
        onClick={() => navigate("/services")}
        style={{ cursor: "pointer" }} // Optional: gives visual cue it's clickable
      >
        <img
          src={AgenticAIRobot}
          className="robot-svg"
          alt="Agentic AI Robot"
        />
      </div>
      {/* <p className="robot-text">
        Hi, I’m Agentic—here to assist you. Scroll down to explore
        <br /> more, or tap me and speak what you’re looking for.
      </p> */}
    </div>
  );
};

export default AgenticPage;
