import FinTranform from "../assets/UseCaseFinTransform.svg";
import HRTransform from "../assets/UseCaseHRTransform.svg";
import Operate from "../assets/UserCircleGear.svg";
import RisknAssure from "../assets/UseCaseRisknAssure.svg";
import SalesnMarket from "../assets/UseCaseSalesnMarket.svg";
import SupplyChain from "../assets/UseCaseSupplyChain.svg";

export const FunctionalUseCaseConstants = [
    {
        id: 1,
        icon: SalesnMarket,
        name: "Sales and Marketing",
        info: [
            {
                id: 101,
                title: "Sales Planning",
                description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
                useCaseOptions: [
                    {
                        id: 1011,
                        name: "Sales Beat Planning",
                    }
                ],
            },
            {
                id: 102,
                title: "Campaign Performance",
                description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
                useCaseOptions:[],
            },
        ],
    },
    {
        id: 2,
        icon: FinTranform,
        name: "Finance Transform",
        info: [
            {
                id: 201,
                title: "Procure to Pay",
                description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
                useCaseOptions:[
                    {
                        id: 2011,
                        name: "P2P: Invoice Processing",
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        icon: RisknAssure,
        name: "SDLC",
        info: [
            {
                id: 301,
                title: "SDLC",
                description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
                useCaseOptions:[
                    {
                        id: 3011,
                        name: "SDLC : BRD Generation",
                    },
                ],
            },
            {
                id: 302,
                title: "AMS Operate",
                description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
                useCaseOptions:[],
            },           
        ],
    },
    {
        id: 4,
        icon: HRTransform,
        name: "HR Transformation",
        info: [
            {
                id: 401,
                title: "HR Recruitment",
                description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
                useCaseOptions:[
                    {
                        id: 4011,
                        name: "Requisition creation & CV screening",
                    },
                ],
            },
            {
                id: 402,
                title: "Workforce Productivity",
                description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
                useCaseOptions:[
                    {
                        id: 4021,
                        name: "Performance Management",
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        icon: SupplyChain,
        name: "Supply Chain & Logistics",
        info: [
            {
                id: 501,
                title: "Supply chain management",
                description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
                useCaseOptions:[],
            },
        ],
    },
    {
        id: 6,
        icon: Operate,
        name: "Operate - IT, Data, Cyber, HR",
        info: [
            {
                id: 601,
                title: "Compliance",
                description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
                useCaseOptions:[
                    {
                        id: 6011,
                        name: "IT Systems Audit",
                    },
                ],
            },
        ],
    },   
];