import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import RobotSide from "./RobotSide";
import HeadlineSection from "./HeadlineSection";
import IndivisualMenu from "./IndividualMenu";
import functional from "../assets/functional.svg";
import industry from "../assets/industry.svg";
import InternalLogo from "../assets/small_logo.png";
import "./AgenticMenu.css";

const AgenticMenu = () => {
  
  const [robotText,setRobotText] = useState("Please select a category");

  const  { stateData, updateState} = useContext(AppContext);
  
  const headlinesection = {
    title: "Agentic Ai Storefront",
    description:
      `In a world where creativity meets technology, innovative minds converge to craft smarter 
      content that captivates audiences and drives engagement, transforming the digital landscape.`,
  };

  const clickFunction = ($event) => {
    updateState("category",$event.currentTarget.textContent);
    updateState("isSubCategoryVisible",true);
    setRobotText("And a sub-category will also suffice");
    // setSelectedTile($event.currentTarget.textContent);
  };

  const selectionChange = ($event) => {
    updateState("category",$event.currentTarget.textContent);
    updateState("isSubCategoryVisible",true);
    updateState("isUseCaseVisibile",false);
    // setSelectedTile($event.currentTarget.textContent);
  };
  
  const loadPrevMenu = ($event) => {
    // setDetailedView(false);
    updateState("isSubCategoryVisible",false);
    updateState("isUseCaseVisibile",false);
    console.log($event.currentTarget.textContent)
    
    // updateState("");
    setRobotText("Please select a category")
  };

  // console.log(detailedView,selectedTile);
  // console.log("React Context state",stateData,stateData.category);
  return (
    <div className="robot-option-page">
      <HeadlineSection
        title={headlinesection.title}
        description={headlinesection.description}
      />
      <div className="menu-content">
        <div className="cards">
          {!stateData.isSubCategoryVisible && (
            <div className="card functional-card" onClick={(e) => clickFunction(e)}>
              <img src={functional} />
              <h3>Functional</h3> 
            </div>
          )}
          {!stateData.isSubCategoryVisible && (
            <div className="card industrysector-card" onClick={(e) => clickFunction(e)}>
              <img src={industry} />
              <h3>Industry Sectors</h3>
            </div>
          )}
          {!stateData.isSubCategoryVisible && (
            <div className="card internal-card" onClick={(e) => clickFunction(e)}>
              <img src={InternalLogo} />
              <h3>Deloitte Internal</h3>
            </div>
          )}
          {stateData.isSubCategoryVisible && (
            <div
              className="innerCard"
            >
              {<IndivisualMenu menu={stateData.category} 
              selectionChange={selectionChange} 
              prevMenu={loadPrevMenu} 
              setRobotText={setRobotText}/>}
            </div>
          )}
        </div>
        
      </div>
      <RobotSide className ="robot" text = {robotText}/>
    </div>
  );
};

export default AgenticMenu;
