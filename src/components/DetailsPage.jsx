import React , { useContext }from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, Outlet } from "react-router-dom";

import HeadlineSection from "./HeadlineSection";
import RobotSide from "./RobotSide";
import { DetailsConstants } from "../constants/DetailsConstants";
import BackButton from "../assets/Back_Button.svg";
import "./DetailsPage.css";

const DetailsPage = () => {
  const navigate = useNavigate();
  const { stateData, updateStateDetails} = useContext(AppContext);
  const headlinesection = {
    title: "Agentic Ai Storefront",
    description: `Tell us what you are looking for ...`,
  };

  const goback = () => {
    // updateStateDetails("main",false);
    navigate('/services');
  }

  const navigatePage = ($event) => {
    if($event.currentTarget.innerText === "See a demo"){
      navigate('/details/demo');
    }
    if($event.currentTarget.innerText === "Request a Live demo"){
      navigate('/details/request');
    }
    if ($event.currentTarget.innerText === "Problem Statement") {}
    if($event.currentTarget.innerText === "Agentic Flow"){}
  }

  return (
    <div>
      <HeadlineSection
        title={headlinesection.title}
        description={headlinesection.description}
      />
      <div className="detail-options">
        <div className="detail-back-button"> 
            <img src={BackButton} onClick={goback}/>
            <p> Back to options</p>
        </div>
        <div className="detail-grid">
          {(stateData.details.main) && DetailsConstants.map((item) => (
            <div key={item.id} className="detail-button" onClick={($event) => navigatePage($event)}>
              <img src={item.icon} className="item-icon-img" />
              <div className="item-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <RobotSide  text={"Our storefront has use cases in the following 3 categories"}/>
    </div>
  );
};

export default DetailsPage;
