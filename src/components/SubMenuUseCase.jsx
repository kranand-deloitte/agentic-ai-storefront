import React, { useContext } from "react";
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

const Customaccordion = ({ index, item, changePage, useCaseOptions }) => {
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
        {useCaseOptions.map(item => (
          <Typography key={item.id}sx={{ textAlign: "left", margin:"5px", cursor:"pointer"}} onClick={changePage}>{item.name}</Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

const SubMenuUseCase = ({selectedMenu}) => {
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
        {selectedUseCase.info.map((item, index) => {
          console.log(item);
          return(
          <Customaccordion
            className="custom-accordion"
            index={index}
            item={item}
            changePage={changePage}
            useCaseOptions={item.useCaseOptions}
          />)
        })}
      </div>
    </div>
  );
};

export default SubMenuUseCase;





