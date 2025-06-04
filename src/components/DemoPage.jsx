import React from "react";
import ReactPlayer from "react-player";
import HeadlineSection from "./HeadlineSection";
import BackButton from "../assets/Back_Button.svg";
import LiveDemo from "../assets/LiveDemoIcon.svg"
import ProblemStatement from "../assets/ProblemStatementIcon.svg"
import AgenticFlow from "../assets/AgenticFlowIcon.svg";
import Video from "../assets/Video.png";
import { useNavigate } from "react-router-dom";
import "./DemoPage.css";

const DemoPage = () => {

    const navigate = useNavigate();

    const headlinesection = {
    title: "Agentic Ai Storefront",
    description: `Tell us what you are looking for ...`,
  };

  return (
    <div>
      <HeadlineSection
        title={headlinesection.title}
        description={headlinesection.description}
      />

      <div className="demo">
        <div className="detail-back-button">
          <img src={BackButton} onClick={() => navigate('/details')}/>
          <p> Back to options</p>
        </div>

        <div className="video-content">
            <img src={Video} alt="" />
            {/* 
            //un comment the code when url is ready for the video.
            <ReactPlayer 
            url={}
            controls={true}
            className = "video-content"
              /> */}
        </div>
        <div>
          
        </div>

        <div className="button-group">
            <div className="button" onClick={() => navigate('/details/request')}>
                <img src={LiveDemo} alt="Request a Live demo"/>
                <p>Request a Live demo</p>
            </div>
            <div className="button">
                <img src={ProblemStatement} alt="Request a Live demo"/>
                <p>Problem Statement</p>
            </div>
            <div className="button">
                <img src={AgenticFlow} alt="Request a Live demo"/>
                <p>Agentic Flow</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
