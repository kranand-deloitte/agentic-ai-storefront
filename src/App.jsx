import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import TopBar from "./components/TopBar";
import AgenticPage from "./components/AgenticPage";
import AgenticMenu from "./components/AgenticMenu";
import DetailsPage from "./components/DetailsPage";
import DemoPage from "./components/DemoPage";
import RequestDemo from "./components/RequestDemo";
import ProblemStatement from "./components/ProblemStatement";
import AgenticFlow from "./components/AgenticFlow";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <TopBar />
          <Routes>
            <Route path="/" element={<AgenticPage />} />
            <Route path="/services" element={<AgenticMenu />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/details/demo" element={<DemoPage />} />
            <Route path="/details/request" element={<RequestDemo />} />
            <Route path="/details/problemStatement" element={<ProblemStatement />} />
            <Route path="/details/agenticFlow" element={<AgenticFlow />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
