import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FunctionalUseCaseConstants } from "../constants/FunctionalUseCaseConstants";
import { IndustryUseCaseConstants } from "../constants/IndustrySectorUseCaseConstants";
import "./SubMenuUseCase.css";

const Customaccordion = ({ index, item, changePage }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        className="content-box"
      >
        <Typography component="span">
          <h4>{item.title}</h4>
          {item.description}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
          <Typography sx={{ textAlign: "left", margin:"5px", cursor:"pointer"}} onClick={changePage}>Placeholder 1</Typography>
          <Typography sx={{ textAlign: "left", margin:"5px", cursor:"pointer"}} onClick={changePage}>Placeholder 2</Typography>
          <Typography sx={{ textAlign: "left", margin:"5px", cursor:"pointer"}} onClick={changePage}>Placeholder 3</Typography>
          <Typography sx={{ textAlign: "left", margin:"5px", cursor:"pointer"}} onClick={changePage}>Placeholder 4</Typography>
          <Typography sx={{ textAlign: "left", margin:"5px", cursor:"pointer"}} onClick={changePage}>Placeholder 5</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const SubMenuUseCase = ({selectedIndex, selectedMenu}) => {
  const navigate = useNavigate();
  const { stateData, updateState } = useContext(AppContext);
  const selectedUseCase =
  selectedMenu !== "Functional"
      ? IndustryUseCaseConstants[stateData.subCategoryIndex]
      : FunctionalUseCaseConstants[stateData.subCategoryIndex];

  const data = selectedMenu !== "Functional" ? IndustryUseCaseConstants : FunctionalUseCaseConstants ;

  const changePage = () => {
    navigate('/details');
  };

  const changeSubMenu = (item,index) =>{
    updateState("subCategory",item.name);
    updateState("subCategoryIndex",index);
  }; 

  return (
    <div className="submenu-container">
      <div className="sidebar">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`icon-box ${
              index === stateData.subCategoryIndex ? "active" : ""
            }`}
            onClick={() => changeSubMenu(item, index)}
          >
            <img src={item.icon} className="icon-img" />
          </div>
        ))}
      </div>
      <div className="content">
        {selectedUseCase.info.map((item, index) => (
          <Customaccordion
            className="custom-accordion"
            index={index}
            item={item}
            changePage={changePage}
          />
        ))}
      </div>
    </div>
  );
};

export default SubMenuUseCase;





