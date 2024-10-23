import React from "react";
import { Navbar } from "./components/employee/navbar/Navbar";
import { Sidebar } from "./components/employee/sidebar/Sidebar";
import { MainContent } from "./components/employee/main-content/MainContent";
import HrNavbar from "./components/hr/hr-navbar/HrNavbar";
import { Route, Routes, useLocation } from "react-router-dom";
import HrContent from "./components/hr/hr-navbar/hr-content/HrContent";

export const App = () => {
  const location = useLocation();
  const navbarHr = ["/hr"];
  return (
    <>
      
      {navbarHr.includes(location.pathname) ? <HrContent /> : <MainContent /> }
      

      <Routes>
        <Route path="/" element={<MainContent />} />

        {/* <Route path="/hr" element={<HrContent/>}/> */}
      </Routes>
    </>
  );
};
