import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    
    const [stateData,setStateData] = useState({
        category: "",
        isCategoryVisible: true,
        subCategory: "",
        isSubCategoryVisible: false,
        subCategoryIndex: 0,
        selectedUseCase: "",
        isUseCaseVisibile: false,
        selectedUseCaseOptions: "",
        isUseCaseOptionsVisible: false,
        useCaseOptionIndex: 0,
        details: {
            main: true,
            demo: true,
            liveDemo: false,
            problemStatement: false,
            agenticFlow: false,
        }
    });

    const updateState = (key,value) => {
        setStateData((prevState) => ({...prevState,[key]: value}))
    };

    const updateStateDetails = (key,value) => {
        setStateData(prev => ({
            ...prev,
            details: {
                ...prev.details,
                [key]:value,
            },
        }));
    }

    return(
        <AppContext.Provider value={{stateData,updateState,updateStateDetails}}>
            {children}
        </AppContext.Provider>
    );
};