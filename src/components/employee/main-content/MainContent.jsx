import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../dashboard/Dashboard";
import { Absences } from "../absent/Absences";
import {MaternityPaternity} from "../maternity-paternity/MaternityPaternity";
import {SickLeave} from "../sick-leave/SickLeave";
import {VacationLeave} from "../vacation-leave/VacationLeave";
import { Sidebar } from "../sidebar/Sidebar";
import { Navbar } from "../navbar/Navbar";

export const MainContent = () => {
  return (
    <>
    <Navbar />
    <Sidebar />
      <main className="ml-64 mt-16">
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/absences" element={<Absences />} />
          <Route path="/maternity-paternity" element={<MaternityPaternity />} />
          <Route path="/sick-leave" element={<SickLeave />}/>
          <Route path="/vacation-leave" element={<VacationLeave />}/>
        </Routes>
      </main>
    </>
  );
};
