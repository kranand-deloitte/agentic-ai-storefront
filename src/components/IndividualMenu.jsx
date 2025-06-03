import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import SubMenuUseCase from "./SubMenuUseCase";
import { FunctionalData } from "../constants/FunctionalConstants";
import { IndustrySectorsData } from "../constants/IndutrySectorsContants";
import { DeloitteInternalData } from "../constants/DeloitteInternalConstants";
import { CategoryList } from "../constants/CategoryContants";
import "./IndividualMenu.css";

const IndivisualMenu = ({ menu, selectionChange, prevMenu, setRobotText }) => {

  const { stateData, updateState } = useContext(AppContext);
  // const [index,setIndex] = useState(0);
  // const [subMenuView, setSubMenuView] = useState(false);
  const FilteredList = CategoryList.filter((item) => item.name !== menu);
  const selectedItem = CategoryList.filter((item) => item.name === menu);

  const subMenuSelectionChange = (item,index) => {
    updateState("subCategoryIndex",index); 
    updateState("isUseCaseVisibile",true);
    updateState("subCategory",item.name);
    setRobotText("Our storefront has use cases in the following 3 categories");
  };

  const menuClassName =
    menu === "Functional"
      ? "functional-card"
      : menu === "Industry Sectors"
      ? "industrysector-card"
      : "internal-card";

  const SubMenuData =
    menu === "Functional"
      ? FunctionalData
      : menu === "Industry Sectors"
      ? IndustrySectorsData
      : DeloitteInternalData;

  console.log("35",stateData);
  if (!stateData.isSubCategoryVisible) return null;
  return (
    <div className="single-menu">
      <div className={`detailed-menu ${menuClassName}`}>
        <div className="detailed-menu-header" onClick={prevMenu}>
          <img src={selectedItem[0].icon} />
          <h1>{selectedItem[0].name}</h1>
        </div>
        {(stateData.isSubCategoryVisible && !stateData.isUseCaseVisibile) && (
          <div className="detailed-menu-grid">
            {SubMenuData.map((item,index) => (
              <div
                key={item.id}
                className={`grid-item ${menu === "Functional"? "functional-grid-item" : ( menu === "Industry Sectors"? "industry-grid-item": "")}`}
                onClick={() => subMenuSelectionChange(item,index)}
              >
                <img src={item.icon} />
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        )}
        {stateData.isUseCaseVisibile && <SubMenuUseCase selectedMenu={menu}/>}
      </div>
      <div className="short-menu">
        {FilteredList.map((item) => (
          <div
            key={item.id}
            className={`short-menu-item ${item.name === "Functional"?"functional-card" :( item.name === "Industry Sectors"? "industrysector-card": "internal-card")}`}
            onClick={($event) => selectionChange($event)}
          >
            <img src={item.icon} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndivisualMenu;
