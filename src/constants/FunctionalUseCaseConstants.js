import FinTranform from "../assets/UseCaseFinTransform.svg";
import HRTransform from "../assets/UserCircleGear.svg";
import Operate from "../assets/UseCaseOperate.svg";
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
                        name: "Sales Planning",
                    }
                ],
            },
            {
                id: 102,
                title: "Trade Promo Optimizer",
                description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
                useCaseOptions: [],
            },
            {
                id: 103,
                title: "Marketing Plan",
                description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
                useCaseOptions:[],
            },
            {
                id: 104,
                title: "Campaign Performance analytics",
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
                        name: "PR to PO",
                    },
                    {
                        id: 2012,
                        name: "Vendor Onboarding",
                    },
                    {
                        id: 2013,
                        name: "Invoice Processing",
                    },
                    {
                        id: 2014,
                        name: "Payment Processing",
                    },
                ],
            },
            {
                id: 202,
                title: "Order to Cash",
                description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
                useCaseOptions:[],
            },
            {
                id: 201,
                title: "Record to Report",
                description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
                useCaseOptions:[],
            },
            {
                id: 201,
                title: "Reconciliation",
                description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
                useCaseOptions:[],
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
                        name: "Code Migration",
                    },
                    {
                        id: 3012,
                        name: "Code Generation",
                    },
                    {
                        id: 3013,
                        name: "Testing",
                    },
                    {
                        id: 3014,
                        name: "BRD Generation",
                    },
                ],
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
                useCaseOptions:[],
            },
            {
                id: 401,
                title: "Workforce Productivity",
                description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
                useCaseOptions:[],
            },
        ],
    },
    {
        id: 5,
        icon: SupplyChain,
        name: "Supply Chain & Logistics",
        info: [
            
        ],
    },
    {
        id: 6,
        icon: Operate,
        name: "Operate - IT, Data, Cyber, HR",
        info: [
            {
                id: 601,
                title: "IT Systems audit",
                description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
                useCaseOptions:[
                    {
                        id: 6011,
                        name: "IT Systems Audit",
                    },
                ],
            },
            {
                title: "Cloud Implement",
                description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
                useCaseOptions:[],
            },
            {
                title: "Cloud Operate",
                description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
                useCaseOptions:[],
            },
        ],
    },   
];