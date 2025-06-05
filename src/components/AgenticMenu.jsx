import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import RobotSide from "./RobotSide";
import HeadlineSection from "./HeadlineSection";
import IndivisualMenu from "./IndividualMenu";
import functional from "../assets/functional.svg";
import industry from "../assets/industry.svg";
import InternalLogo from "../assets/small_logo.svg";
import "./AgenticMenu.css";

const AgenticMenu = () => {
  
  const [robotText,setRobotText] = useState("");

  const  { stateData, updateState} = useContext(AppContext);
  
  const headlinesection = {
    title: "Agentic AI Storefront",
    description:
      `In a world where creativity meets technology, innovative minds converge to craft smarter 
      content that captivates audiences and drives engagement, transforming the digital landscape.`,
  };

  const clickFunction = (category) => {
    updateState("category", category);
    updateState("isSubCategoryVisible", true);
    setRobotText("And a sub-category will also suffice");
  };

  const selectionChange = ($event) => {
    updateState("category",$event.currentTarget.textContent);
    updateState("isSubCategoryVisible",true);
    updateState("isUseCaseVisibile",false);
    // setSelectedTile($event.currentTarget.textContent);
    setRobotText("And a sub-category will also suffice");
  };
  
  const loadPrevMenu = ($event) => {
    // setDetailedView(false);
    updateState("isSubCategoryVisible",false);
    updateState("isUseCaseVisibile",false);
    console.log($event.currentTarget.textContent)
    
    setRobotText("Please select a category")
  };

  useEffect(()=>{
    if(stateData.isUseCaseVisibile){
      setRobotText("Our storefront has use cases in the following 3 categories");
      return;
    }
    if(stateData.isSubCategoryVisible){
      setRobotText("And a sub-category will also suffice");
      return ;
    }
    if(stateData.isCategoryVisible){
      setRobotText("Please select a category");
      return;
    }
  },[]);

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
           <div className="card functional-card">
           <div className="card-inner">
             <div className="card-front">
               <img src={functional} alt="Functional" />
               <div className="card-title">Functional</div>
             </div>
             <div className="card-back" onClick={() => clickFunction("Functional")}>
             <div className="card-title">Explore Functional Options</div>
             </div>
           </div>
         </div>
         
          )}

          {!stateData.isSubCategoryVisible && (
           <div className="card industrysector-card">
           <div className="card-inner">
             <div className="card-front">
               <img src={industry} alt="Industry Sectors" />
               <div className="card-title">Industry Sectors</div>
             </div>
             <div className="card-back" onClick={() => clickFunction("Industry Sectors")}>
             <div className="card-title">Industry Sector Choices</div>
             </div>
           </div>
         </div>
         
          )}

          {!stateData.isSubCategoryVisible && (
            <div className="card internal-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={InternalLogo} alt="Deloitte Internal" />
                <div className="card-title">Deloitte Internal</div>
              </div>
              <div className="card-back" onClick={() => clickFunction("Deloitte Internal")}>
              <div className="card-title">Internal Resources</div>
              </div>
            </div>
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
